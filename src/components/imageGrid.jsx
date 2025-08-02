import './components.css'

function ImageGrid() {
    return(
        <div className='image-grid'>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-gallery-milkbottles.jpg' alt='image of milkbottles' />
                <img src='/images/mobile/image-gallery-milkbottles.jpg' alt='image of milkbottles'/>
            </picture>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-gallery-orange.jpg' alt='image of an orange' />
                <img src='/images/mobile/image-gallery-orange.jpg' alt='image of an orange' />
            </picture>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-gallery-cone.jpg' alt='image of an ice cream cone' />
                <img src='/images/mobile/image-gallery-cone.jpg' alt='image of an ice cream cone' />
            </picture>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/desktop/image-gallery-sugarcubes.jpg' alt='image of sugar cubes' />
                <img src='/images/mobile/image-gallery-sugar-cubes.jpg' alt='image of sugar cubes' />
            </picture>
        </div>
    )
}

export default ImageGrid;