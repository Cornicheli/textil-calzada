import { MultiPropositos, Header, Filters } from '../components'

export default function Multi() {
    return (
        <>
            <Header />
            <section style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '15px',
            }}>
                <div style={{ marginTop: '50px' }}>
                    <Filters />
                </div>
                <MultiPropositos />
            </section>
        </>

    )
}
