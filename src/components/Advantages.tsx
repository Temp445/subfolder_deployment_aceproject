import { BarChart3, Users, CheckSquare, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Advantages = () => {
  const t = useTranslations('Advantages')
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4  md:px-12">

        <div className="text-center justify-start">
          <h1 className="inline-block border text-black px-8 py-4 rounded-full text-xl md:text-2xl font-extrabold shadow-xl mb-8">
            {t('Title')}
          </h1>
          <p className="text-gray-700  md:text-lg font-medium text-justify md:max-w-7xl mx-auto leading-relaxed">
            {t('Description')}
          </p>
        </div>

      
        <div className="relative  mx-auto">

          <div className="grid grid-cols-1  gap-8 pt-16 ">
  
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#04BFBF] group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded group-hover:rotate-45 border-y-2 group-hover:border-[#04BFBF] group-hover:rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <BarChart3 className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-[#04BFBF] group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl 2xl:text-3xl font-bold text-gray-900">{t('Projects.Title')}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {t.rich('Projects.Description', {
      strong: (chunks) => <strong>{chunks}</strong>,
    })}
              </p>
            </div>

           
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded group-hover:rotate-45 border-y-2 group-hover:border-purple-400 group-hover:rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-purple-400 group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 justify-end text-end">{t('Team.Title')}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t.rich('Team.Description', { strong: (chunks) => <strong>{chunks}</strong>})}
              </p>
            </div>

           
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10  rounded group-hover:rotate-45 border-y-2 group-hover:border-blue-400 group-hover:rounded-full  shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CheckSquare className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-blue-400 group-hover:-rotate-45 " />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">{t('Task.Title')}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t.rich('Task.Description', { strong: (chunks) => <strong>{chunks}</strong>})}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-400 group transform hover:-translate-y-2">
              <div className="flex items-center mb-6 gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10  rounded group-hover:rotate-45 border-y-2 group-hover:border-red-400 group-hover:rounded-full  shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 text-black group-hover:text-red-400 group-hover:-rotate-45" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">{t('Calendar.Title')}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t.rich('Calendar.Description', { strong: (chunks) => <strong>{chunks}</strong>})}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;