

export default function Header() {
    return (
        <section className='flex justify-around align-center border'>
            <h2 className=''>Bandage</h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Pages</a></li>
            </ul>
            <div className=''>
                <a href='#' className=''>
                    <img src='/loginIcon.svg' className='' />
                    Login/Register</a>
                <a href='#' className=''>
                    < img src='/searchIcon.svg' className='' />
                    <h3 className=''></h3>
                </a>
                <a href='#' className=''>
                    <img className='' src='/chartIcon.svg' />
                    <h3 className=''></h3>
                </a>
                <a href='#' className=''>
                    <img className='' src='/heartIcon.svg' />
                    <h3 className=''></h3>
                </a>

            </div>
        </section>
    )
}