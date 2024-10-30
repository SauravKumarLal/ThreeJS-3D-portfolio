import { educationAchievements } from '../constants/index.js';

const EducationAchievements = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Education & Achievements</h3>

      <div className="client-container">
        {educationAchievements.map((item, index) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.description}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.title}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.detail}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <img key={i} src={item.icon} alt="icon" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
            {/* Add separator line after specific items if needed */}
            {(index === 0 || index === 1) && (
              <hr className="mt-6 border-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationAchievements;
