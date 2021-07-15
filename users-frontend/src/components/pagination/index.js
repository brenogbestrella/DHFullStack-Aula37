import "./styles.css"
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext  } from "react-icons/md"
import { ArrowButton } from "./styles"
import { toast } from "react-toastify"

export default function Pagination(props) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className = "pagination">
            <button type="button" onClick={() => {
                setDarkMode(!darkMode);
                toast.success("Cadastrado com sucesso")
            }}>dark</button>
            <ArrowButton 
                type="button" 
                disabled={props.page === 1} 
                onClick={() => props.onPageChange(props.page - 1)}
                dark={darkMode}
                
            >
                <MdNavigateBefore size={24}/>
            </ArrowButton>
            <span>Página {props.page}</span>
            <ArrowButton  
                type="button" 
                onClick={() => props.onPageChange(props.page + 1)}
            >
                <MdNavigateNext size={24}/>
            </ArrowButton>
        </div>
    )
}