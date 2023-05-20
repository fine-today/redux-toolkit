import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Vids() {
	const Vids = useSelector((store) => store.youtube.data);
	const [SwiperRef, setSwiperRef] = useState(null);
	const playSwiper = () => {
		SwiperRef.autoplay.start();
	};
	const pauseSwiper = () => {
		SwiperRef.autoplay.stop();
	};
	console.log(Vids);
	return (
		<section id='vids' className='myScroll'>
			<Swiper
				slidesPerView={3}
				spaceBetween={50}
				loop={true}
				centeredSlides={true}
				modules={[Navigation, Pagination, Autoplay]}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: true,
				}}
				onSwiper={setSwiperRef}
			>
				{Vids.map((vid, idx) => {
					if (idx >= 10) return null;
					return (
						<SwiperSlide key={idx}>
							<div className='inner'>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
								</div>
								<h2>{vid.snippet.title.length > 50 ? vid.snippet.title.substr(0, 50) + '...' : vid.snippet.title}</h2>
								<p>{vid.snippet.description}</p>
							</div>
						</SwiperSlide>
					);
				})}
				<div className='controll'>
					<button type='button' className='play' onPointerUp={playSwiper}>
						play
					</button>
					<button type='button' className='pause' onPointerUp={pauseSwiper}>
						pause
					</button>
				</div>
			</Swiper>
		</section>
	);
}

export default memo(Vids);
