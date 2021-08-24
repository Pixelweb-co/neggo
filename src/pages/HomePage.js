

import Navbar from '../components/common/navbar'
import Slider from '../components/common/Slider' 
import Footer from '../components/common/footer'
import Info from '../components/common/info'
import Layout from '../components/layout/layout'



export default function HomePage() {
  return (
 
    <Layout>

	<Slider/>
      <section className="ftco-services ftco-no-pb">
			<div className="container">
				<div className="row no-gutters">
          <div className="col-md-3 d-flex services align-self-stretch p-4 ">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-doctor"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Qualitfied Doctors</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch p-4 ">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-ambulance"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Emergency Care</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch p-4 ">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-stethoscope"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">Outdoor Checkup</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex services align-self-stretch p-4 ">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-24-hours"></span>
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">24 Hours Service</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
        </div>
			</div>
		</section>

		<section className="ftco-section ftco-no-pt ftc-no-pb">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0 bg_about">
					</div>
					<div className="col-md-7 wrap-about py-4 py-md-5">
	          <div className="heading-section mb-5">
	          	<div className="pl-md-5 ml-md-5">
		          	<span className="subheading">About MindFreedom</span>
		            <h2 className="mb-4 mb061" >Medical specialty concerned with the care of acutely ill hospitalized patients</h2>
	            </div>
	          </div>
	          <div className="pl-md-5 ml-md-5 mb-5">
							<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
							<div className="row mt-5 pt-2">
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-first-aid-kit"></span></div>
										<div className="text">
											<h3>Primary Care</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-dropper"></span></div>
										<div className="text">
											<h3>Lab Test</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-experiment-results"></span></div>
										<div className="text">
											<h3>Symptom Check</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="services-2 d-flex">
										<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-heart-rate"></span></div>
										<div className="text">
											<h3>Heart Rate</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="ftco-intro background_s"  data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<h2>We Provide Free Health Care Consultation</h2>
						<p className="mb-0">Your Health is Our Top Priority with Comprehensive, Affordable medical.</p>
						<p></p>
					</div>
					<div className="col-md-3 d-flex align-items-center">
						<p className="mb-0"><a href="#" className="btn btn-secondary px-4 py-3">Free Consutation</a></p>
					</div>
				</div>
			</div>
		</section>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
          	<span className="subheading">Departments</span>
            <h2 className="mb-4">Clinic Departments</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
    	<div className="ftco-departments">
			<div className="row">
             <div className="col-md-12 nav-link-wrap">
	            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
	              <a className="nav-link " id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Neurology</a>

	              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Surgical</a>

	              <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Dental</a>

	              <a className="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Ophthalmology</a>

	              <a className="nav-link" id="v-pills-5-tab" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-5" aria-selected="false">Cardiology</a>

	            </div>
	          </div>
	          <div className="col-md-12 tab-wrap">

	            <div className="tab-content bg-light p-4 p-md-5 " id="v-pills-tabContent">

	              <div className="tab-pane py-2 fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch background_i" ></div>
	              		</div>
	              		<div className="col-lg-8">
	              			<h2>Neurological Deparments</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
											<div className="row mt-5 pt-2">
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-first-aid-kit"></span></div>
														<div className="text">
															<h3>Primary Care</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-dropper"></span></div>
														<div className="text">
															<h3>Lab Test</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-experiment-results"></span></div>
														<div className="text">
															<h3>Symptom Check</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-heart-rate"></span></div>
														<div className="text">
															<h3>Heart Rate</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>

	              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch background_ii" ></div>
	              		</div>
	              		<div className="col-md-8">
	              			<h2>Surgical Deparments</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
											<div className="row mt-5 pt-2">
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-first-aid-kit"></span></div>
														<div className="text">
															<h3>Primary Care</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-dropper"></span></div>
														<div className="text">
															<h3>Lab Test</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-experiment-results"></span></div>
														<div className="text">
															<h3>Symptom Check</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-heart-rate"></span></div>
														<div className="text">
															<h3>Heart Rate</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>
	              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch back_i" ></div>
	              		</div>
	              		<div className="col-md-8">
	              			<h2>Dental Deparments</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
											<div className="row mt-5 pt-2">
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-first-aid-kit"></span></div>
														<div className="text">
															<h3>Primary Care</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-dropper"></span></div>
														<div className="text">
															<h3>Lab Test</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-experiment-results"></span></div>
														<div className="text">
															<h3>Symptom Check</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-heart-rate"></span></div>
														<div className="text">
															<h3>Heart Rate</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>

	              <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-day-4-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch back_a" ></div>
	              		</div>
	              		<div className="col-md-8">
	              			<h2>Ophthalmology Deparments</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
											<div className="row mt-5 pt-2">
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-first-aid-kit"></span></div>
														<div className="text">
															<h3>Primary Care</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-dropper"></span></div>
														<div className="text">
															<h3>Lab Test</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-experiment-results"></span></div>
														<div className="text">
															<h3>Symptom Check</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-heart-rate"></span></div>
														<div className="text">
															<h3>Heart Rate</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>

	              <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-day-5-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch back_b" ></div>
	              		</div>
	              		<div className="col-md-8">
	              			<h2>Cardiology Deparments</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
											<div className="row mt-5 pt-2">
												<div className="col-md-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-idea"></span></div>
														<div className="text">
															<h3>Primary Care</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-idea"></span></div>
														<div className="text">
															<h3>Lab Test</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-idea"></span></div>
														<div className="text">
															<h3>Symptom Check</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="services-2 d-flex">
														<div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className="flaticon-idea"></span></div>
														<div className="text">
															<h3>Heart Rate</h3>
															<p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>
	            </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>

		<section className="ftco-section ftco-no-pt">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ">
          	<span className="subheading">Doctors</span>
            <h2 className="mb-4">Our Qualified Doctors</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
				<div className="row">
					<div className="col-md-6 col-lg-3 ">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch back_c" ></div>
							</div>
							<div className="text pt-3 text-center">
								<h3>Dr. Lloyd Wilson</h3>
								<span className="position mb-2">Neurologist</span>
								<div className="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
									<ul className="ftco-social text-center">
		                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 ">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch back_d" ></div>
							</div>
							<div className="text pt-3 text-center">
								<h3>Dr. Rachel Parker</h3>
								<span className="position mb-2">Ophthalmologist</span>
								<div className="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
									<ul className="ftco-social text-center">
		                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 ">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch back_e" ></div>
							</div>
							<div className="text pt-3 text-center">
								<h3>Dr. Ian Smith</h3>
								<span className="position mb-2">Dentist</span>
								<div className="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
									<ul className="ftco-social text-center">
		                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch back_f" ></div>
							</div>
							<div className="text pt-3 text-center">
								<h3>Dr. Alicia Henderson</h3>
								<span className="position mb-2">Pediatrician</span>
								<div className="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
									<ul className="ftco-social text-center">
		                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ">
          	<span className="subheading">Testimonials</span>
            <h2 className="mb-4">Our Patients Says About Us</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img mr-4 back_g" >
                  </div>
                  <div className="text ml-2 bg-light">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Farmer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img mr-4 back_h" >
                  </div>
                  <div className="text ml-2 bg-light">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businessman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img mr-4 back_i" >
                  </div>
                  <div className="text ml-2 bg-light">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Students</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img mr-4 back_j" >
                  </div>
                  <div className="text ml-2 bg-light">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Striper</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap d-flex">
                  <div className="user-img mr-4 back_k" >
                  </div>
                  <div className="text ml-2 bg-light">
                  	<span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
          	<span className="subheading">Pricing</span>
            <h2 className="mb-4">Our Pricing</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
    		<div className="row">
        	<div className="col-md-3">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Basic</h3>
	        			<p><span className="price">$24.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Standard</h3>
	        			<p><span className="price">$34.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="pricing-entry active pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Premium</h3>
	        			<p><span className="price">$54.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Platinum</h3>
	        			<p><span className="price">$89.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

		<section className="ftco-section bg-light">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
          	<span className="subheading">Blog</span>
            <h2 className="mb-4">Recent Blog</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          </div>
        </div>
				<div className="row">
          <div className="col-md-4 ">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20 back_l" >
								<div className="meta-date text-center p-2">
                  <span className="day">23</span>
                  <span className="mos">January</span>
                  <span className="yr">2019</span>
                </div>
              </a>
              <div className="text bg-white p-4">
                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="d-flex align-items-center mt-4">
	                <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
	                <p className="ml-auto mb-0">
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20 back_m" >
								<div className="meta-date text-center p-2">
                  <span className="day">23</span>
                  <span className="mos">January</span>
                  <span className="yr">2019</span>
                </div>
              </a>
              <div className="text bg-white p-4">
                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="d-flex align-items-center mt-4">
	                <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
	                <p className="ml-auto mb-0">
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20 back_n" >
								<div className="meta-date text-center p-2">
                  <span className="day">23</span>
                  <span className="mos">January</span>
                  <span className="yr">2019</span>
                </div>
              </a>
              <div className="text bg-white p-4">
                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="d-flex align-items-center mt-4">
	                <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
	                <p className="ml-auto mb-0">
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</section>
    </Layout>
 
    )
}

