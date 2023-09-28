import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeFirstName, changeLastName} from "../../utils/slice/userSlice.ts";
import {api} from "../../utils/api/api.ts";
import {user, userSelector} from "../../utils/type/user.ts";

export function EditName() {

    const user: user = useSelector<userSelector>((u) => u.user) as user

    const [editName, setEditName] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        setEditName(!editName)
    }

    if (editName) {
        const save = (e: any) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget as HTMLFormElement)
            const firstName = data.get("firstName")!.toString()
            const lastName = data.get("lastName")!.toString()
            if (firstName !== user.firstName || lastName !== user.lastName) {
                dispatch(changeFirstName(firstName))
                dispatch(changeLastName(lastName))
                const newData: user = {
                    firstName: firstName,
                    lastName: lastName
                }
                api("profile", "PUT", newData, user.token)
                    .then(handleClick)
                    .catch(error => console.log(error))
            }
            handleClick()
        }

        return (
            <div className="header">
                <h1>Welcome back</h1>
                <form onSubmit={save}>
                    <div className="editName-container-input">
                        <input type="text" defaultValue={user.firstName} name="firstName"/>
                        <input type="text" defaultValue={user.lastName} name="lastName"/>
                    </div>
                    <div className="editName-container-button">
                        <button className="save-button" type="submit">Save</button>
                        <button className="save-button" onClick={handleClick}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="header">
            <h1>Welcome back<br />{`${user.firstName} ${user.lastName}!`}</h1>
            <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </div>
    )
}