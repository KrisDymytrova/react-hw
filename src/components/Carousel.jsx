import { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    handlePrev = () => {
        const { images } = this.props;
        const { activeIndex } = this.state;
        const newIndex = (activeIndex === 0) ? images.length - 1 : activeIndex - 1;
        this.setState({ activeIndex: newIndex });
    }

    handleNext = () => {
        const { images } = this.props;
        const { activeIndex } = this.state;
        const newIndex = (activeIndex === images.length - 1) ? 0 : activeIndex + 1;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        if (!images || !images.length) return null;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img alt={`Slide ${index + 1}`} className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
                        onClick={this.handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next"
                        onClick={this.handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;