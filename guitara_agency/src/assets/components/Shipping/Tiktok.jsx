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
    const [country, setCountry] = useState('usa');
    const [inputAmount1, setInputAmount1] = useState('');
    const [inputAmount2, setInputAmount2] = useState('');
    const [freeShippingMessage, setFreeShippingMessage] = useState('');
    const [showWhatsApp, setShowWhatsApp] = useState(false);

    // Fetch countries and rates
    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesResponse = await fetch('/countries.json');
                const ratesResponse = await fetch('/rates.json');
                if (!countriesResponse.ok || !ratesResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
                const countriesData = await countriesResponse.json();
                const ratesData = await ratesResponse.json();

                setCountries(countriesData);
                setRates(ratesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleTextInput = (e, setter) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setter(value);
        }
    };

    const updateConvertedAmount = (input1) => {
        const rate = rates[country];
        if (!isNaN(input1) && rate) {
            const convertedAmount = (input1 * rate) / 100;
            setInputAmount2(convertedAmount.toFixed(2));
            setShowWhatsApp(true);
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
            setShowWhatsApp(true);
        }
    };

    return (
        <div className={ShippingStyle.ShippingPage}>
            <div className={ShippingStyle.ShippingOption}>
                <Link to="/tiktok" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn}>الشحن</button>
                </Link>
                <Link to="/distributorstiktok" className={ShippingStyle.ShippingLink}>
                    <button className={ShippingStyle.ShippingBtn}>نظام الوكالة</button>
                </Link>

            </div>
            <div className={ShippingStyle.ShippingContent}>
                <div className={ShippingStyle.ShippingImage}>
                    <div>
                        <img
                            src='./images/tiktokmovin.gif'
                            alt={platform}
                            className={ShippingStyle.ShippingImage}
                        />
                    </div>
                </div>

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

                    {freeShippingMessage && (
                        <div className={ShippingStyle.FreeShippingMessage}>
                            <h4>{freeShippingMessage}</h4>
                        </div>
                    )}
                    {showWhatsApp && (
                        <div className={ShippingStyle.WhatsAppMessage}>
                            <a
                                href="https://wa.me/201282020076"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className={ShippingStyle.WhatsAppIcon}
                                />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
