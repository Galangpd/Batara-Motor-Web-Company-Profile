import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fungsi untuk menggulir ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // untuk scroll halus
        });
    };

    // Fungsi untuk mengecek posisi scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // tombol muncul setelah scroll 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

  return (
    <div>
        {isVisible && 
                <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-white p-3 border text-xl border-primary rounded-full shadow-lg hover:bg-blue-500 transition-all">
                    🔝
                </button>
        }
    </div>
  )
}

export default ScrollToTop