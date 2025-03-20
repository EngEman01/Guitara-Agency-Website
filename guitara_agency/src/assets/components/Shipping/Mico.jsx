// import { Link } from 'react-router-dom';
// import ShippingStyle from './Shipping.module.css';
// import { useEffect, useState } from 'react';

// export default function Bigo() {
//     const platform = localStorage.getItem('platform');

//     const images = {
//         tiktok: './images/tiktokmovin.gif',
//         bigo: './images/giphy1.gif',
//         mico: './images/mico.gif',
//     };

//     const [countries, setCountries] = useState([]);
//     const [rates, setRates] = useState({});
//     const [paymentMethods, setPaymentMethods] = useState({});
//     const [country, setCountry] = useState('usa');
//     const [inputAmount1, setInputAmount1] = useState('');
//     const [inputAmount2, setInputAmount2] = useState('');
//     const [showPaymentMethods, setShowPaymentMethods] = useState(false);

//     useEffect(() => {
//         // Fetch countries.json
//         fetch('/countries.json')
//             .then((response) => response.json())
//             .then((data) => setCountries(data))
//             .catch((error) => console.error('Error loading countries:', error));

//         // Fetch rates.json
//         fetch('/rates.json')
//             .then((response) => response.json())
//             .then((data) => setRates(data))
//             .catch((error) => console.error('Error loading rates:', error));

//         // Fetch payment methods
//         fetch('/payment.json')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Payment Methods Data:", data); // Log the fetched data
//                 setPaymentMethods(data);
//             })
//             .catch((error) => console.error('Error loading payment methods:', error));
//     }, []);

//     const handleCountryChange = (e) => {
//         const selectedCountry = e.target.value;
//         setCountry(selectedCountry);
//         setShowPaymentMethods(false); // Reset visibility on country change
//     };

//     const handleTextInput = (e, setter) => {
//         const value = e.target.value;
//         if (/^\d*\.?\d*$/.test(value)) {
//             setter(value);
//             setShowPaymentMethods(value !== ''); // Show payment methods if input is not empty
//         }
//     };

//     const updateConvertedAmount = (input1) => {
//         const rate = rates[country];
//         if (!isNaN(input1) && rate) {
//             const convertedAmount = (input1 * rate) / 100;
//             setInputAmount2(convertedAmount.toFixed(2));
//         }
//     };

//     const handleInputAmount1Change = (e) => {
//         handleTextInput(e, setInputAmount1);
//         const value = parseFloat(e.target.value);
//         updateConvertedAmount(value);
//     };

//     const handleConvertInput2 = () => {
//         const input2 = parseFloat(inputAmount2);
//         const rate = rates[country];
//         if (!isNaN(input2) && rate) {
//             const originalAmount = (input2 * 100) / rate;
//             setInputAmount1(originalAmount.toFixed(2));
//         }
//     };

//     return (
//         <div className={ShippingStyle.ShippingPage}>
//             <div className={ShippingStyle.ShippingOption}>
//                 <Link to="/distributorsbigo" className={ShippingStyle.ShippingLink}>
//                     <button className={ShippingStyle.ShippingBtn}>نظام الوكالة</button>
//                 </Link>

//                 <Link to="/bigo" className={ShippingStyle.ShippingLink}>
//                     <button className={ShippingStyle.ShippingBtn}>الشحن</button>
//                 </Link>
//             </div>
//             <div className={ShippingStyle.ShippingContent}>
//                 <div className={ShippingStyle.ShippingImage}>
//                     <div>
//                         <img
//                             src="./images/giphy1.gif"
//                             alt={platform}
//                             className={ShippingStyle.ShippingImage}
//                         />
//                     </div>
//                 </div>

//                 <div className={ShippingStyle.CurrencyConverter}>
//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="countrySelect">اختر الدولة</label>
//                         <select
//                             id="countrySelect"
//                             value={country}
//                             onChange={handleCountryChange}
//                         >
//                             {countries.map((country) => (
//                                 <option key={country.code} value={country.code}>
//                                     {country.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="inputAmount1">ادخل عدد العملات</label>
//                         <input
//                             type="text"
//                             id="inputAmount1"
//                             value={inputAmount1}
//                             onChange={handleInputAmount1Change}
//                         />
//                     </div>

//                     <div className={ShippingStyle.CurrencyContent}>
//                         <label htmlFor="inputAmount2">المبلغ الاجمالي بعمله بلدك</label>
//                         <input
//                             type="text"
//                             id="inputAmount2"
//                             value={inputAmount2}
//                             onChange={(e) => handleTextInput(e, setInputAmount2)}
//                             onBlur={handleConvertInput2}
//                         />
//                     </div>

//                     {showPaymentMethods && (
//                         <div className={ShippingStyle.PaymentMethods}>
//                             {/* <h4>طرق الدفع المتاحة:</h4> */}
//                             {paymentMethods[country]?.payment_methods?.length > 0 ? (
//                                 paymentMethods[country].payment_methods.map((method, index) => (
//                                     <a
//                                         href="https://wa.me/201282020076"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <div key={index} className={ShippingStyle.PaymentMethod}>
//                                             <img src={method.image} alt={method.name} className={ShippingStyle.PaymentImage} />
//                                             {/* <span>{method.name}</span> */}
//                                         </div>
//                                     </a>
//                                 ))
//                             ) : (
//                                 <div>لا توجد طرق دفع متاحة</div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


import { Link } from 'react-router-dom';
import ShippingStyle from './Shipping.module.css';
import { useEffect, useState } from 'react';

export default function Bigo() {
    const platform = localStorage.getItem('platform');

    const images = {
        tiktok: './images/tiktokmovin.gif',
        bigo: './images/giphy1.gif',
        mico: './images/mico.gif',
    };

    const [countries, setCountries] = useState([]);
    const [rates, setRates] = useState({});
    const [paymentMethods, setPaymentMethods] = useState({});
    const [country, setCountry] = useState('usa');
    const [inputAmount1, setInputAmount1] = useState('');
    const [inputAmount2, setInputAmount2] = useState('');
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);
    const [showCurrencyConverter, setShowCurrencyConverter] = useState(false); // New state variable

    useEffect(() => {
        // Fetch countries.json
        fetch('/countries.json')
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error('Error loading countries:', error));

        // Fetch rates.json
        fetch('/rates.json')
            .then((response) => response.json())
            .then((data) => setRates(data))
            .catch((error) => console.error('Error loading rates:', error));

        // Fetch payment methods
        fetch('/payment.json')
            .then((response) => response.json())
            .then((data) => {
                console.log("Payment Methods Data:", data); // Log the fetched data
                setPaymentMethods(data);
            })
            .catch((error) => console.error('Error loading payment methods:', error));
    }, []);

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setShowPaymentMethods(false); // Reset visibility on country change
    };

    const handleTextInput = (e, setter) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setter(value);
            setShowPaymentMethods(value !== ''); // Show payment methods if input is not empty
        }
    };

    const updateConvertedAmount = (input1) => {
        const rate = rates[country];
        if (!isNaN(input1) && rate) {
            const convertedAmount = (input1 * rate) / 100;
            setInputAmount2(convertedAmount.toFixed(2));
        }
    };

    const handleInputAmount1Change = (e) => {
        handleTextInput(e, setInputAmount1);
        const value = parseFloat(e.target.value);
        updateConvertedAmount(value);
    };

    const handleConvertInput2 = () => {
        const input2 = parseFloat(inputAmount2);
        const rate = rates[country];
        if (!isNaN(input2) && rate) {
            const originalAmount = (input2 * 100) / rate;
            setInputAmount1(originalAmount.toFixed(2));
        }
    };

    const handleShowCurrencyConverter = () => {
        setShowCurrencyConverter(true); // Show currency converter on button click
    };

    return (
        <div className={ShippingStyle.ShippingPage}>
            <div className={ShippingStyle.ShippingOption}>
                <Link to="/mico" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn} onClick={handleShowCurrencyConverter}>
                        الشحن
                    </button>
                </Link>
                <Link to="/distributorsmico" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn}>نظام الوكالة</button>
                </Link>

            </div>
            <div className={ShippingStyle.ShippingContent}>
                <div className={ShippingStyle.ShippingImage}>
                    <div>
                        <img
                            src="./images/mico.gif"
                            alt={platform}
                            className={ShippingStyle.ShippingImage}
                        />
                    </div>
                </div>

                {showCurrencyConverter && ( // Conditional rendering of the currency converter
                    <div className={ShippingStyle.CurrencyConverter}>
                        <div className={ShippingStyle.CurrencyContent}>
                            <label htmlFor="countrySelect">اختر الدولة</label>
                            <select
                                id="countrySelect"
                                value={country}
                                onChange={handleCountryChange}
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={ShippingStyle.CurrencyContent}>
                            <label htmlFor="inputAmount1">ادخل عدد العملات</label>
                            <input
                                type="text"
                                id="inputAmount1"
                                value={inputAmount1}
                                onChange={handleInputAmount1Change}
                            />
                        </div>

                        <div className={ShippingStyle.CurrencyContent}>
                            <label htmlFor="inputAmount2">المبلغ الاجمالي بعمله بلدك</label>
                            <input
                                type="text"
                                id="inputAmount2"
                                value={inputAmount2}
                                onChange={(e) => handleTextInput(e, setInputAmount2)}
                                onBlur={handleConvertInput2}
                            />
                        </div>

                        {showPaymentMethods && (
                            <div className={ShippingStyle.PaymentMethods}>
                                {paymentMethods[country]?.payment_methods?.length > 0 ? (
                                    paymentMethods[country].payment_methods.map((method, index) => (
                                        <a
                                            key={index}
                                            href="https://wa.me/201282020076"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className={ShippingStyle.PaymentMethod}>
                                                <img src={method.image} alt={method.name} className={ShippingStyle.PaymentImage} />
                                            </div>
                                        </a>
                                    ))
                                ) : (
                                    <div>لا توجد طرق دفع متاحة</div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}