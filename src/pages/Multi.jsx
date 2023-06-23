import { MultiPropositos, Header, Filters } from '../components'

export default function Multi() {
    return (
        <>
            <Header />
            <div className='d-flex flex-row' style={{
                marginTop: '7rem',
                padding: '15px',
                overflow: 'auto',
            }}>
                <Filters />
                <MultiPropositos />
            </div>
        </>

    )
}
