import './Tag.css'

function Tag ({ tags }) {
    let tagsFinal = []

    tags.forEach(tag => tagsFinal.push(<span key={ tag } className='tag'>{ tag }</span>))

    return (
        <div className='tags'>
            { tagsFinal }
        </div>
    )
};

export default Tag;