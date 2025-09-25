import { View, Text, StyleSheet, FlatList, Modal } from "react-native"
import BookCard from "../components/BookCard"
import { useEffect, useState } from "react"
import { deleteBookbyId, getListofBooks } from "../services/api/config"
import AddButton from "../components/AddButton"
import AddBookScreen from "./AddBookScreen"
import { Book } from "../types/Book"


const HomeScreen = () => {

    const [bookList, setBookList] = useState<Book[]>([]) //manage list of books

    const [modalVisible,setModalVisible] = useState(false) //manage visibility of modal

    const [selectedItem,setSelectedItem] = useState<Book | null>(null) //manage a particular item

    useEffect(() => {
        //on mounting fetch all books
       getAllBooks()
    }, [])


    //function to fetch all books
    const getAllBooks = ()=>{
         getListofBooks({
            onSuccess: books => setBookList(books),
            onError: err => console.log(err)
        })
    }

    //delete a particular item/book
    const onDeleteItem = (item : Book)=>{
        deleteBookbyId({
            onSuccess :  ()=> getAllBooks(),
        onError : (err) => console.log(err),
        itemId : item.id
        })
    }

    //update a book
    const onEditItem = (item : Book)=>{
        setModalVisible(true)
        setSelectedItem(item)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Books</Text>
            
            {/* Rendering list of books */}
            <FlatList
            data={bookList}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> 
                
                // book card component for each book
            <BookCard title={item.book_name} authorName = {item.name_of_author} price = {item.price_of_book}
            imageURI={item.cover} onDeleteItem={()=> onDeleteItem(item)}
            onEditItem = {()=>onEditItem(item)}/>}>


            </FlatList>

            {/* button to open modal for adding new book */}
            <AddButton onPress={()=>{
             setModalVisible(true)
             setSelectedItem(null)
             }}/>

             {/* modal */}
            <Modal visible={modalVisible} animationType="slide">

                {/* add book screen inside modal */}
                <AddBookScreen onCloseIcon={()=> setModalVisible(false)} onSaveBook={()=> getAllBooks()} selectedItem ={selectedItem}/>

            </Modal>
        </View>
    )
}


export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign : "center"
    }
})