import jmb from '../assets/jmb.png'
export default function HomePageLayout() {
    return (
        <>
            <main className='' style={{}}>
                <div className='d-flex mt-4'>
                    <img src={jmb}></img>
                    <h2 style={{ color: '#802c6e', marginTop: '100px' }}>Scegli ció che fa per te dal menú di navigazione</h2>
                    <div style={{
                        position: 'relative', top: '260px', right: '330px'
                    }}>
                        <a class="btn btn" style={{ backgroundColor: '#802c6e', color: 'white', width: '260px' }} href="/prodotti" role="button" > Prodotti</a>
                    </div>


                </div >

            </main >
        </>
    )
}