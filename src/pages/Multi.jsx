import { MultiPropositos, Header, Filters } from '../components'

export default function Multi() {
    return (
        <>
            <Header />
            <section className='d-flex justify-content-center flex-wrap p-2'>
                <div className='m-3'>
                    <Filters />
                </div>
                <div>
                    <MultiPropositos />
                </div>
            </section>
        </>

    )
}
