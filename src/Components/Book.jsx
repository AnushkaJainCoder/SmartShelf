import DropDown from "./DropDown";


export default function Book({b, title, author, image}){
    return(
        <>
            {title}
            {author}
            {/* {b.imageLinks.thumbnail && } */}
            <img src={image} />
            {/* <DropDown item = {b}/> */}
            <DropDown item = {b} />

        </>
    )
}