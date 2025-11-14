import jmb from '../assets/jmb.png'
export default function HomePageLayout() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid ms-2">
                        <a className="navbar-brand" href="#">Boolify</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">HomePage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Chi Siamo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Prodotti</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='' style={{}}>
                <div className='d-flex mt-4'>
                    <img src={jmb}></img>
                    <h2 style={{ color: '#802c6e', marginTop: '100px' }}>Scegli ció che fa per te dal menú di navigazione</h2>

                </div>
            </main>
            <footer style={{ backgroundColor: '#fff8f9', minHeight: '100px' }}>
                <div className='row'>
                    <h4 className='mt-4' style={{ color: '#802c6e', textAlign: 'center' }}>se hai bisogno contattaci su:</h4>
                </div>

            </footer>
        </>
    )
}