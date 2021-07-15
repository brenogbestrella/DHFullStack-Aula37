import "./styles.css"
import { MdImage } from "react-icons/md"

export default function PhotoInput(props) {

    async function readImage(image) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = () => reject();
            reader.readAsDataURL(image);
        });
    }

    async function handleChangePhoto(e) {
        const newPhoto = await readImage(e.target.files[0])
        props.onPhotoChange(newPhoto);
    }

    return (
        <div className="photoinput">
            <label htmlFor="image">
                {props.photo ? (
                    <img src={props.photo} />
                ) : (
                    <MdImage size={150} color = "#999" />
                )}                
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleChangePhoto}  
                />
            </label>
        </div>
    )
}