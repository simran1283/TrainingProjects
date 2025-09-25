import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import AddTextInput from "../components/AddTextInput";
import { useState } from "react";
import Button from "../components/Button";
import { addBook, updateBook } from "../services/api/config";
import { Book } from "../types/Book";

interface AddBookScreenProps {
    onCloseIcon: () => void;
    onSaveBook: () => void;
    selectedItem: Book | null;
}

const AddBookScreen: React.FC<AddBookScreenProps> = ({ onCloseIcon, onSaveBook, selectedItem }) => {

    const [bookName, setBookName] = useState<string>(selectedItem?.book_name ?? "")
    const [authorName, setAuthorName] = useState<string>(selectedItem?.name_of_author ?? "")
    const [coverURL, setCoverURL] = useState<string>(selectedItem?.cover ?? "")
    const [bookPrice, setBookPrice] = useState<string>(selectedItem?.price_of_book ?? "")

    //add new book
    const AddNewBook = () => {
        addBook({
            body: {
                book_name: bookName,
                name_of_author: authorName,
                price_of_book: bookPrice,
                cover: coverURL
            },
            onSuccess: () => {
                onCloseIcon()
                onSaveBook()
            },
            onError: (err) => console.log(err)
        })
    }

// edit existing book
    const editBook = () => {

        if (!selectedItem?.id) {
            console.warn("No book selected for editing.");
            return;
        }
        updateBook({
            id: selectedItem?.id,
            body: {
                book_name: bookName,
                name_of_author: authorName,
                price_of_book: bookPrice,
                cover: coverURL
            },
            onSuccess: () => {
                onCloseIcon()
                onSaveBook()
            },
            onError: (err) => console.log(err)
        })
    }



    return (
        <View style={styles.container}>

            {/* button to close modal */}
            <TouchableOpacity style={styles.closeButton} onPress={onCloseIcon}>
                <AntDesign name="close" size={15} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Book Details</Text>

            {/* text input components for book details */}
            <AddTextInput placeholder={"Book Name"} value={bookName} onChangeText={setBookName} keyboardType={"default"} />
            <AddTextInput placeholder={"Author Name"} value={authorName} onChangeText={setAuthorName} keyboardType={"default"} />
            <AddTextInput placeholder={"Cover URL"} value={coverURL} onChangeText={setCoverURL} keyboardType={"default"} />
            <AddTextInput placeholder={"Book Price"} value={bookPrice} onChangeText={setBookPrice} keyboardType={"numeric"} />

            {/* save button component */}
            <Button onPress={() => { !!selectedItem ? editBook() : AddNewBook() }} />
        </View>
    )
}

export default AddBookScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    closeButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "#c45050ff",
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    }
})