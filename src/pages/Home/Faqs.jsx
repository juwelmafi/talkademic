import Lottie from "lottie-react";
import React from "react";
import faqAnime from "../../assets/lottie-react/faq-anime.json";

const Faqs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-3">
        Frequently Asked question
      </h2>
      <p className="text-center w-[90%] md:w-[50%] mx-auto text-xs md:text-sm">
        Clear answers to common queries users have about your service or
        product, helping them quickly find the information they need.
      </p>
      <div className="flex justify-center items-center gap-10 mt-10">
        <div className="text-center lg:text-left md:w-[40%]">
          <Lottie animationData={faqAnime} loop={true} />
        </div>
        <div className="md:w-[60%]">
          <div className="join join-vertical bg-base-100 w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold">
               How do I book a tutor on Talkademic?
              </div>
              <div className="collapse-content text-sm">
              Simply browse tutors by category or subject, view their profiles, and click “Book Now” to schedule a session at your convenience.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
               Is there a free trial class available?
              </div>
              <div className="collapse-content text-sm">
               Some tutors offer free trial sessions. Check their profiles for details or use the filter to find trial-available tutors.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
               Can I cancel or reschedule a session?
              </div>
              <div className="collapse-content text-sm">
              Yes, you can cancel or reschedule up to 24 hours before the session time through your dashboard without any extra charges.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
              Are the tutors verified on Talkademic?
              </div>
              <div className="collapse-content text-sm">
             Yes, all tutors go through a strict verification process, including educational background and identity checks, before being listed.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
              What subjects or languages are available?
              </div>
              <div className="collapse-content text-sm">
             Talkademic offers a wide range of subjects, from academic topics to spoken languages like English, Bangla, Arabic, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
