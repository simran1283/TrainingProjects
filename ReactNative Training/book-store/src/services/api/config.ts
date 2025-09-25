import axios from "axios"
import { Alert } from "react-native"
import { Book } from "../../types/Book"

// endpoint API
const endpointURL = "https://68d38724214be68f8c662550.mockapi.io/books"

//generic interface
interface APICallback<T = any>  {
    onSuccess?: (data : T) => void
    onError?: (err : unknown) => void
}

//deletebookbyid params type declaration
interface deleteBookParams extends APICallback<void> {
    itemId : string
}

//addbook params type
interface addBookParams extends APICallback {
    body : Omit<Book,"id">
}


//updateBook params type 
interface updateBookParams extends APICallback {
    id : string,
    body : Partial<Omit<Book,"id">>
}


// fetch list of books
export const getListofBooks = async ({ onSuccess, onError } : APICallback<Book[]>) => {
    try {
        const res = await axios.get<Book[]>(endpointURL)
        console.log(JSON.stringify(res.data, null, 3))
        onSuccess && onSuccess(res.data)
    }
    catch (err) {
        onError && onError(err)
        console.log("Error : ", err)
    }
}


// fetch single book by id
export const getBookbyId = async ({ onSuccess, onError } : APICallback<Book>) => {
    try {
        const res = await axios.get(`${endpointURL}/3`)
        console.log(JSON.stringify(res.data, null, 3))
        onSuccess && onSuccess(res.data)
    }
    catch (err) {
        onError && onError(err)
        console.log("Error : ", err)
    }
}


// delete book by id
export const deleteBookbyId = async ({ onSuccess, onError, itemId } : deleteBookParams) => {
    try {
        const res = await axios.delete(`${endpointURL}/${itemId}`)
        console.log(JSON.stringify(res.data, null, 3))
        Alert.alert("Book Deleted successfully")
        onSuccess && onSuccess()
    }
    catch (err) {
        onError && onError(err)
        console.log("Error : ", err)
    }
}


// add new book

export const addBook = async ({ onSuccess, onError, body } : addBookParams) => {
    try {
        const res = await axios.post<Book>(endpointURL,body)
        console.log("Book added successfully")
        Alert.alert("Book added successfully")
        onSuccess && onSuccess(res.data)
    }
    catch (err) {
        onError && onError(err)
        console.log("Error : ", err)
    }
}


//update book
export const updateBook = async ({ onSuccess, onError ,id,body} : updateBookParams) => {
    try {
        const res = await axios.put<Book>(`${endpointURL}/${id}`,body)
        console.log("Book Updated Successfully")
        Alert.alert("Book Updated Successfully")
        onSuccess && onSuccess(res.data)
    } catch (err) {
        onError && onError(err)
        console.log("Error : ", err)
    }
}