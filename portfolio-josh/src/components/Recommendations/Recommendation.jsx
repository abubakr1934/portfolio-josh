import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Install Swiper modules


const Recommendation = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/reviews')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                setError('Failed to fetch reviews.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='project-bg flex flex-col justify-center items-center'>
            <div className='text-center flex flex-col justify-center items-center mb-6'>
                <h2 className='text-4xl font-bold'>Recommendations</h2>
                <p className='md:w-1/2 text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='w-full flex'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    centeredSlides={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    loop={true}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Pagination]}
                    className='w-full flex'
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className='review-item text-left p-6 bg-white shadow-xl flex flex-col justify-start gap-2'>
                                <div className='review-stars mb-2'>{review.stars}</div>
                                <h3 className='text-xl font-semibold mb-2'>{review.title}</h3>
                                <p className='text-gray-600 mb-4'>{review.content}</p>
                                <div className='flex items-center gap-4'>
                                    <img src={review.image} alt={review.name} className='review-image w-16 h-16 rounded-full ' />
                                    <div>
                                        <strong>{review.name}</strong>
                                        <p> {review.designation}</p>
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Recommendation;
