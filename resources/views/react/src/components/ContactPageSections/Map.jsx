import React from 'react';

function Map() {
    return (
        <div className="bg-cover bg-center bg-fixed">
            <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 font-[sans-serif] bg-opacity-70">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5992.464263839004!2d-9.504695750319959!3d30.380281721333553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDIyJzQ4LjkiTiA5wrAzMCcxNi44Ilc!5e0!3m2!1sfr!2sma!4v1717412593865!5m2!1sfr!2sma"
                    width="1150"
                    height="550"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Map;
