import jmb from '../assets/jmb.png'
export default function HomePageLayout() {
    return (
        <>
            <main className='' style={{}}>
                <div className='d-flex mt-4'>
                    <div>
                        <img src={jmb}></img>
                    </div>
                    <div>
                        <h2 style={{ color: '#802c6e', marginTop: '100px', fontSize: '40px' }}>Scegli ció che fa per te dal menú di navigazione, oppure clicca qui</h2>
                        <a class="btn btn" style={{
                            backgroundColor: '#802c6e', color: 'white', width: '260px', marginTop: '40px', marginLeft: '122px'
                        }} href="/prodotti" role="button" > Prodotti</a>
                    </div>


                </div >

            </main >
        </>
    )
}