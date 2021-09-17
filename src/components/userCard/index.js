const UserCard = ({ data }) => {
    return <div className='col-12 my-2 col-sm-6 col-md-4 col-lg-3 p-lg-2'>
        <div className='card rounded'>
            <img width='200' height='200' src={`https://avatars.dicebear.com/v2/avataaars/${data.name + new Date().toString()}.svg?options[mood][]=happy`} className='card-img-top bg-light' alt={data.name} />
            <div className='card-body'>
                <h5 className='card-title text-dark py-2 m-0'>{data.name}</h5>
                <p className='card-text py-1 m-0 d-flex align-items-center'><i className='bi bi-envelope text-secondary' style={{ fontSize: '1.3em', marginRight: '4px' }}></i>{data.email}</p>
                <p className='card-text py-1 m-0 d-flex align-items-center'><i className='bi bi-telephone text-secondary' style={{ fontSize: '1.3em', marginRight: '4px' }}></i>{data.phone}</p>
                <p className='card-text py-1 m-0 d-flex align-items-center'><i className='bi bi-globe2 text-secondary' style={{ fontSize: '1.3em', marginRight: '4px' }}></i>{'http://' + data.website}</p>
            </div>
            <div className='card-footer bg-light'>
                <div className='row'>
                    <div className='col-4 text-center'> <i className="bi bi-heart text-danger" style={{ fontSize: '1.5em', marginRight: '4px' }}></i> </div>
                    <div className='col-4 text-center'> <i className="bi bi-pencil-square text-secondary" style={{ fontSize: '1.5em', marginRight: '4px' }}></i> </div>
                    <div className='col-4 text-center'> <i className="bi bi-trash-fill text-secondary" style={{ fontSize: '1.5em', marginRight: '4px' }}></i> </div>
                </div>
            </div>
        </div>
    </div>
}

export default UserCard