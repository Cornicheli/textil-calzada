export default function Map() {
    return (
        <div className='d-flex align-items-center p-5'>
            <iframe
                className='border border-dark'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.47623764932!2d-58.3625480847653!3d-34.7939585804106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d73385711d3%3A0xaea6c355a255abb8!2sTextil%20Calzada!5e0!3m2!1sen!2sar!4v1686146792308!5m2!1sen!2sar"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
