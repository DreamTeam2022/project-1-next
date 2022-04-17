import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import react, {Component} from "react";
import {Mydata} from "../components/carouselData";

export default class Carousel extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>
            
            <section className="bg-black md:h-screen flex  py-20 px-8">
                <div className=" w-full xl:w-8/12 mx-auto flex my-auto flex-wrap relative">
                  <div className="w-full text-center lg:w-5/12 mx-auto lg:pt-20 lg:pr-28 lg:text-left overflow-hidden lg:-ml-12 lg:pl-10 lg:absolute z-30 bg-gradient-to-r from-black via-black  h-full ">
                      <h1 className="text-4xl text-white font-bold">
                      Try it out with these projects
                      </h1>
                      <p className="text-gray-200 text-2xl ">
                      Select the project that you are interested in and it will redirect you to our app
                      </p>
                      <div className=" flex mx-auto justify-center py-10 ">
                          <button className="button text-white p-6 rounded-2xl border-[1px] border-white mx-2" onClick={this.previous}>
                            Prev
                          </button>
                          <button className="button text-white p-6 rounded-2xl border-[1px] border-white mx-2" onClick={this.next}>
                              Next
                          </button>
                      </div>
                  </div>
                <div className="w-full  ml-auto ">
                  <Slider ref={c => (this.slider = c)} {...settings} className=" px-0">
                          {Mydata.map((item) => (
                              <div key={item.id} className="flex my-auto py-12">
                                  <div className="px-4 py-6 bg-[#141414] mx-8 md:mx-4 lg:mx-2 xl:mx-8  my-auto rounded-xl">
                                      <div className="py-6 bg-black rounded-lg text-center">
                                      <Image src={item.image}  alt={item.alt} className="w-full h-full " />
                                      </div>
                                      <h1 className="text-gray-400 text-">{item.title}</h1>
                                      <p>{item.description}</p>
                                  </div>
                              
                              </div>
                          ))}
                  </Slider>
                </div>
                </div>  
            </section> 
                       
        </>
      );
    }
  }