import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import actionTypesConstants from "../../constants/actionTypes.constants"
import UserCard from "../userCard"

const UserList = () => {

    const dispatchAction = useDispatch()
    const usersList = useSelector(_ => _.usersList)

    useEffect(() => {

        dispatchAction({
            type: actionTypesConstants.INITIATE_FETCH_USERS_LIST_API
        })

    }, [])

    return usersList.status ? <div className='row m-0 card-group'>
        {usersList.status === 'success' && usersList.data?.data?.map((item, index) => {
            return <UserCard key={`user-card-${index}`} data={item} />
        })}
    </div> : <div className='row h-100 m-0'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>
    </div>
}

export default UserList