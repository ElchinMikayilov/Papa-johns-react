import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'


const Faq = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "İNTERNET VASİTƏSİLƏ ONLAYN SİFARİŞİ NECƏ ETMƏK OLAR?",
            answer: "Hər şey çox sadədir: ilk öncə Siz axtardığınız məhsulu tapmalı və onu sifariş səbətinə əlavə etməlisiniz. “Sifariş səbəti” səhifənin sağ tərəfində yerləşir. Həmin düyməyə basdıqda “Səbət”-də olan bütün məhsulların siyahısını görə bilərsiniz. “Sifarişi göndər” düyməsi siyahının aşağı hissəsində yerləşir. Bu düymənin üstünə klik edərək, Siz çatdırılma ünvanı və şəxsi məlumatlarınızı daxil edə bilərsiniz. Çatdırılma ünvanını qeyd edin, səhifədəki vacib sahələri doldurun və “Ödənişə keç” düyməsinə basın. Ödəniş etdikdən sonra Sizin sifarişiniz həmin anda təsdiq  edilir  və  restoranda  pizza  hazırlanmağa başlanır."
        },
        {
            question: "RESTORANIN VERİLMİŞ SİFARİŞİ QƏBUL ETDİYİNİ NECƏ BİLMƏK OLAR?",
            answer: "Onlayn sifariş zamanı qeyd etdiyiniz elektron ünvanına sifarişinizin qəbul edilməsi haqqında təsdiq mesajı göndərilir. Bu mesaj restoranın verdiyiniz sifarişi qəbul etdiyini bildirir. Sifarişiniz barədə ətraflı məlumat almaq üçün Siz *7272 telefon nömrəsi vasitəsilə restoranla əlaqə saxlaya bilərsiniz."
        },
        {
            question: "ONLAYN SİFARİŞİN ÇATDIRILMASI ÜÇÜN MİNİMAL MƏBLƏĞ NƏ QƏDƏRDİR?",
            answer: "Sifarişin minimal dəyəri - 10 AZN təşkil edir."
        },
        {
            question: "SİFARİŞ TƏXMİNƏN NƏ QƏDƏR MÜDDƏT ƏRZİNDƏ ÇATDIRILIR?",
            answer: "Sifarişin təxmini çatdırılma vaxtı 35-45 dəqiqə təşkil edir."
        },
        {
            question: "ONLAYN SİFARİŞİ ETDİKDƏN SONRA, SİFARİŞİ ŞƏXSƏN GƏLİB GÖTÜRMƏK MÜMKÜNDÜRMÜ?",
            answer: "Əlbəttə. Sifariş edən zaman Siz “Al Apar” funksiyasını seçə bilərsiniz. Bu halda Siz sifarişinizin təsdiq olunması haqqında məktub alacaqsınız."
        },
        {
            question: "NƏ ÜÇÜN İSTƏNİLƏN RESTORANDAN SİFARİŞ ETMƏK OLMAZ?",
            answer: "Pizzanı isti və təzə olaraq müştəriyə çatdırmaq üçün hər bir restoranın şəxsi çatdırılma zonası var. Əgər Siz pizzanın seçdiyiniz hər hansı bir restoran tərəfindən hazırlamasını istəyirsinizsə, bunun üçün siz sifariş edən zaman “Al Apar” seçimindən istifadə etməlisiniz."
        },
        {
            question: "MƏN HESAB YARATMADAN MENYU İLƏ TANIŞ OLA BİLƏRƏM ?",
            answer: "Əlbəttə. Sizi maraqlandıran məhsulun növünü seçməlisiniz. Bu zaman hesab yaratmaq zərurəti olmadan, siz menyuya, məhsulların təsviri və qiymətlərinə baxa bilərsiniz."
        },
        {
            question: "SİFARİŞİN ÇATDIRILMASI ZAMANI KURYERƏ MÜŞTƏRİNİN ÇATDIRILMA HAQQINI ÖDƏMƏSİ ÜÇÜN KİFAYƏT QƏDƏR NAĞD VƏSAİT GƏTİRMƏSİ BARƏDƏ NECƏ MƏLUMAT VERMƏK MÜMKÜNDÜR?",
            answer: "Siz sifarişlə bağlı məlumatları qeyd edən zaman, “Kuryer üçün əlavə məlumat” hissəsində bununla bağlı məlumat verə bilərsiniz, məsələn, “50 AZN-dən artıq qalan pulu qaytarmaq lazımdır”."
        },
        {
            question: "İNTERNET VASİTƏSİLƏ SİFARİŞ ZAMANI MÜŞTƏRİ ÜÇÜN ƏLVERİŞLİ ÖDƏNİŞ NÖVLƏRİ  HANSILARDIR?",
            answer: "İnternet vasitəsilə sifariş zamanı, ödənişin həyata keçirilməsi üçün 3 növ ödəmə vasitəsi təklif edilir: onlayn kart vasitəsilə ödəniş, kuryerə kart vasitəsilə ödəniş və nağd şəkildə ödəniş."
        },
        {
            question: "TƏKRAR  SİFARİŞ FUNKSİYASI NECƏ  İŞLƏYİR?",
            answer: "Sifarişin təkrar edilməsi funksiyası əvvəlki sifarişlərdən birini tez təkrar etməyə sizə imkan verir. Bu funksiya yalnız sizin sistemə daxil olmaq üçün icazəniz olduğu halda mümkündür. Etdiyiniz sifarişlərin siyahısına baxmaq üçün, siz şəxsi kabinetinizə daxil olaraq “Sifariş tarixçəsi” hissəsinə nəzər yetirə bilərsiniz. Hər bir sifarişin yanında “Sifarişi təkrar etmək” düyməsi var. Bu düyməyə basdıqda  sifariş təkrar olaraq “Səbət”-ə əlavə edilir."
        },
        {
            question: "NÖVBƏTİ GÜN ÜÇÜN SİFARİŞ VERMƏK MÜMKÜNDÜRMÜ?",
            answer: "Bəli, siz növbəti gün üçün sifariş edə bilərsiniz. Bu halda sifarişi tərtib edən zaman siz “Çatdırılma vaxtı” hissəsində sifarişin çatdırılması üçün zəruri tarixi qeyd etməlisiniz. Zəruri tarixi və çatdırılma vaxtını qeyd etmək üçün “Vaxtı seç” düyməsini seçməlisiniz. Heç bir tarix qeyd edilmədiyi halda bütün sifarişlər mümkün qədər qısa müddət ərzində çatdırılır."
        },
        {
            question: "ŞƏXSİ PAROLU NECƏ DƏYİŞDİRMƏK /XATIRLAMAQ/ OLAR?",
            answer: "Şəxsi parolunuzu unutduğunuz zaman, siz sayta daxil olacaq və “Qiriş/Qeydiyyat” düyməsinə basmalısınız . Açılan formada “Şifrəni unutmusunuz?” düyməsinə toxunaraq, qeydiyyat zamanı istifadə olunan elektron poçt ünvanını və ya telefon nömrəsini qeyd etməli və “OK” düyməsinə basmalısınız. Telefon nömrənizi qeyd etdiyiniz halda, telefonunuza yeni dörd rəqəmli parol ilə SMS gələcək. Elektron poçt ünvanınızı qeyd etdiyiniz halda isə, elektron ümvanınıza parolun dəyişdirilməsi üçün link göndəriləcəkdir. Məktubun spam qovluğuna düşməsi ehtimalı da mümkündür. Bunun üçün diqqətli olmağınızı məsləhət görürük: parol bərpa olunmur, o sadəcə yeni parol ilə əvəz oluna bilər. Əgər Siz parolu dəyişdirmək istəyirsinizsə, bu halda “Şəxsi kabinet”ə daxil olub, səhifənin birinci hissəsində parolun dəyişdirilməsi funksiyasından istifadə edə bilərsiniz."
        },
        {
            question: "PİZZANIN İSTİFADƏ MÜDDƏTİ NƏ QƏDƏRDİR?",
            answer: "Məhsulun hazırlanması anından onun istifadə müddəti: - +2˚С-dən +6˚С-yə qədər temperaturda – 24 saat, - isti vəziyyətdə isə 3 saat təşkil edir."
        },
        {
            question: "PAPABONUS NƏ DEMƏKDİR?",
            answer: "PapaBonus – Sizə bonus ballarını qazanmaq, yığmaq və toplanan bonus ballarını istifadə etmək imkanı verən bir proqramdır."
        },
        {
            question: "BONUS BALLARINI NECƏ QAZANMAQ OLAR?",
            answer: "- Siz, bizim sayt vasitəsilə onlayn sifariş zamanı bonus balları qazanmaq imkanı əldə edirsiniz. Sifarişin istər bizim tərəfimizdən çatdırılması zamanı, istərsə də  şəxsən sizin tərəfinizdən restorandan götürülməsi halında, siz xərclədiyiniz hər 1 AZN məbləğə görə 10 bonus balı qazanırsınız."
        },
        {
            question: "BONUS BALLARINI NECƏ İSTİFADƏ ETMƏK OLAR?",
            answer: "Bonus ballarını sadəcə hədiyyələri almaq üçün istifadə edə bilərsiniz. “PapaBonus” bölməsinə daxil olaraq “Hədiyyələrin siyahısı” hissəsinə keçməlisiniz. Burada siz hədiyyəni almaq üçün lazım olan balların miqdarı və qeyd olunan hədiyyələrin siyahısı ilə tanış ola bilərsiniz. Kifayət qədər bonus balınız olduğu halda, seçdiyiniz hədiyyənin üzərinə klik edərək, hədiyyəni “Səbət”-ə əlavə edə bilərsiniz. Sifariş tamamlandıqda, hədiyyəyə görə müəyyən edilmiş bal toplanmış bonus ballarından çıxılır."
        },
        {
            question: "BALLARIN İSTİFADƏ MÜDDƏTİ VARMI?",
            answer: "Bəli, bonus balları 180 gün müddətində etibarlıdır. Siz bu müddət ərzində heç bir alış-veriş etmədiyiniz təqdirdə, sizin ballarınız silinəcəkdir."
        },
        {
            question: "NƏ ÜÇÜN BONUS BALLARI SİFARİŞ ETDİKDƏN DƏRHAL SONRA ƏLAVƏ EDİLMİR?",
            answer: "Loyallıq proqramının balları sifarişin ödənilməsindən sonra 24 saat ərzində təsdiq olunur. Bu vaxta qədər onlar “təsdiqlənməmiş ballar” kimi nəzərdə tutulur."
        },
        {
            question: "PAPABONUSU SİZİN TƏKLİF ETDİYİNİZ DİGƏR KAMPANIYALARLA EYNİ ZAMANDA İSTİFADƏ ETMƏK MÜMKÜNDÜRMÜ?",
            answer: "Bəli, Siz sifarişi yerinə yetirən zaman həm bonus ballarını, həm də promo-kodlu kampaniyadan istifadə edərək hədiyyə mallarını əldə edə bilərsiniz."
        },
        {
            question: "PROMO-KOD NƏDİR?",
            answer: "Bu kodlaşdırılmış söz kampaniyanı aktivləşdirməyə yaxud hədiyyə əldə etməyə imkan verən simvollar toplusudur. Promo-kod bir dəfəlik və ya bir neçə dəfəlik ola bilər. Bir dəfə üçün olan promo-kodu kampaniya keçirələn zaman bir dəfə istifadə etmək olar. Çox dəfəlik promo-kodu isə hədsiz sifarişlər üç"
        },
        {
            question: "PROMO-KODU NECƏ ƏLDƏ ETMƏK OLAR?",
            answer: "Promo-kodları kuponlar, sosial media paylaşımlarımız və çöl reklamlarından əldə edə bilərsiniz. Promo-kodları qaçırmamaq üçün bizi izləyin!"
        },
        {
            question: "KAMPANIYANI AKTİVLƏŞDİRMƏK ÜÇÜN PROMO-KODU HARA YAZMAQ LAZIMDIR?",
            answer: "Siz öncə restoranımızın saytına daxil olmalısınız. Menyunun aşağı hissəsində siz promo-kodun daxil edilməsi üçün lazımı hissəni görə bilərsiniz. Promo-kodun uğurla daxil edilməsindən sonra həmin sütunda aksiyanın şərtləri və hədiyyə barəsində məlumat əldə etmək mümkündür. Hədiyyə, aksiya şərtlərinin düzgün yerinə yetirilməsi ilə avtomatik olaraq əlavə edilir.  "
        },
        {
            question: "PROMO-KODU DAXİL EDİRƏM,  LAKİN  HEÇNƏ ALINMIR?",
            answer: "Promo-kodun doğru olmamasının bir neçə səbəbi ola bilər: - Siz bir dəfə üçün nəzərdə tutulmuş və sizə göndərilmiş promo-kodu artıq istifadə etmisiniz; - Aksiyanın etibarlılıq müddəti artıq bitib; - Promo-kod səhv daxil edilmişdir. Baş hərfi və sətri hərfləri nəzərə alaraq Sizə göndərilən promo-kodun düzgün daxil edildiyindən əmin olmalısınız. Eyni zamanda, siz, əlavə simvolların daxil edilib-edilmədiyindən də əmin olmalısınız. Promo-kodu kopya etmək olmaz, onu əl ilə yazmaq lazımdır."
        },
        {
            question: "BİR SİFARİŞİ YERİNƏ YETİRƏN ZAMAN KAMPANIYANI PROMO-KOD VƏ VƏ PROQRAMIN BONUS BALLARI İLƏ EYNİ ANDA İSTİFADƏ ETMƏK MÜMKÜNDÜRMÜ?",
            answer: "Bəli. Siz bir sifariş etdiyiniz zaman aksiya üzrə hədiyyə əldə edə bilər, həmçinin bonus ballarını məhsula dəyişə bilər, və eləcə də yeni ballar qazana bilərsiniz."
        },
        {
            question: "PAPA JOHNS PİZZASININ ÖLÇÜLƏRİ NƏ QƏDƏRDİR?",
            answer: "Ənənəvi xəmirlə hazırlanan pizzanın ölçüləri 17 sm – 4 dilim, 23 sm – 6 dilim, 30 sm – 8 dilim, 35 sm – 10 dilim olur. Nazik xəmirlə hazırlanan pizzanın ölçüləri 23 sm – 6 dilim, 30 sm – 8 dilim, 35 sm – 10 dilim təşkil edir."
        },
        {
            question: "ƏNƏNƏVİ XƏMİRİN NAZİK XƏMİRDƏN FƏRQİ NƏDƏDİR?",
            answer: "Ənənəvi xəmir nazik xəmirdən pizzanın kənarları ilə fərqlənir. Nazik xəmir ənənəvi xəmir kimi eyni qaydada qarışdırılır, lakin onun hazırlanma prosesi nazik lay-lay kreker xəmiri effektinə nail olmaq üçün başqa bir texnologiya ilə hazırlanır. Ənənəvi xəmirlə pizzanı sifariş edən zaman, Sizə əlavə olaraq pulsuz bir ədəd sarımsaq sousu verilir."
        },
        {
            question: "ŞƏXSİ PİZZANI HAZIRLAMAQ MÜMKÜNDÜRMÜ?",
            answer: "Şəxsi pizzanı hazırlamaq mümküm deyil. Lakin Siz pizzaya istənilən inqrediyenti əlavə etmək və ya hər hansı inqrediyenti çıxartmaq hüququna maliksiniz."
        },
        {
            question: "MƏHSULLARI  HARDAN  ALIRSINIZ?",
            answer: "Bütün məhsulların 80-90% biz xaricdən alırıq. Yerli tədarükçüdən və xaricdən alınan bütün məhsullar ciddi keyfiyyət yoxlamasından keçir, yerli şirkətlər-tədarükçülər isə şirkətin standartlara uyğun audit keçir. Pizzanın hazırlanmasında biz yalnız yüksək keyfiyyətli təzə tərəvəz və məhsullardan istifadə edirik."
        },
        {
            question: "MƏHSULLARINIZA DAİR KEYFİYYƏT GÖSTƏRİCİSİ “HALAL” - SERTİFİKATINIZ VARMI?",
            answer: "Bütün məhsullarımıza dair keyfiyyət sertifikatlarımız var. Ət məhsulları üçün “Halal” sertifikatı da var. Siz bununla bağlı olaraq istənilən vaxt menecerlərə müraciət edə bilərsiniz. Bu halda tələb etdiyiniz sertifikatlar sizə təqdim olunmalıdır."
        },
        {
            question: "XƏMİRİ YOĞURAN ZAMAN HANSI SƏBƏBƏ GÖRƏ ƏLCƏKDƏN İSTİFADƏ OLUNMUR?",
            answer: "- Xəmirin istehsalında və onunla işləyən zaman, xəmir əlcəklərə yapışdığı səbəbindən, dünyanın heç bir ölkəsində lateksdən hazırlanmış əlcəklərdən istifadə olunmur. Çünki əlcək cırılan zaman onun parçalarının xəmirə düşməsi ehtimalı mümkündür. Şirkətin əməkdaşları hər 30 dəqiqədən bir və ya iş yerini tərk edən zaman əllərini yuyur və dezinfeksiya edir. Həmçinin istehsalatdan öncə hər səhər əməkdaşların əlləri üzərində kəsik və yaraların olub-olmaması yoxlanılır və əllərin gigiyenik vəziyyətdə olması yoxlanılır. - kəsik və yaralar olduğu təqdirdə, xəmirin hazırlanmasında əlcəklərdən istifadə edilir və onun parçalarının xəmirə düşməsinin qarşısını almaq üçün açıq rəngdə əlcəklərdən istifadə olunur."
        },
        {
            question: "PAPA TALK NƏDIR?",
            answer: "Sorğuya qoşulmaqla, iştirakçılar burada göstərilən və Papa John’s Pizza Azerbaijan-ın hər hansı digər tələbləri ilə tanış olduqlarını, qəbul etdiklərini və razılaşdıqlarını təstiq edirlər. Sorğuda iştirak edərkən iştirakçının suallara verdiyi cavablar yarışmanın nəticəsinə və iştirakçının qalib seçilib seçilməməyinə təsir etmir. Sorğunun suallarına müsbət və ya mənfi olmağından aslı olmayaraq, real fikirlər əks etdirən cavabların verilməsi mütləqdir. Yarışmada iştirak etmək üçün sifarişi verdikdən sonra, müştəri məmnuniyyəti sorğusunu doldurmaq kifayətdir. Sorğudan keçmək üçün pizza qutusunun  və ya sifariş qəbzinin üzərində Papa Talk QR kodunu skan edin və sifariş qəbzinin üzərindəki restoran nömrəsini daxil edin və sorğunun suallarına cavab verin. Hər bir iştirakçı yalnız 14 gün fasilədən sonra yarışmaya yenidən qatıla bilər. Hər ayın sonunda təsadüfi kompüter seçimi nəticəsində yalnız bir seçiləcəkdir. Hər qazanan iştirakçı üçün mükafat - ayda bir böyük pizza hədiyyə qazandıran, on iki tək pizza hədiyyə kodundan ibarətdir. Hədiyyə pizzanı istənilən restoranımıza yaxınlaşıb promo kodu təqdim etməklə əldə edə bilərsiniz. Hədiyyə kodlarının hər biri yalnız bir ay müddətində etibarlı olacaqdır. Qalib elan edildikdən sonra 7 gün ərzində 12 ədəd onlayn hədiyyə kodu qalibə təqdim olunacaq. Hər ay yalnız bir pulsuz böyük pizza əldə etmək şərtilə, 12 ay ardıcıl olaraq, ümumi 12 pizzadan zövq ala bilərsiz. Promokodların təqdim olunduğu zamandan etibarən 14 gün ərzində qalib ilk ayın promokodunu istifadə etməzsə, Papa John’s Pizza yenidən qalib seçəcəkdir. Göstərilən mükafatın nağd pul və ya başqa alternativi yoxdur. Mükafat nağd pul şəkilində geri qaytarıla və köçürülə bilməz. Aksiyada iştirak zamanı çəkilən hər hansı bir xərc iştirakçının məsuliyyətidir. Papa John’s Pizza, öz mülahizəsinə görə, aktivliyin fəaliyyətinə xələl gətirən və ya bu şərtlərə zidd hesab olunan hər hansı bir şəkildə hərəkət etmək istəyən şəxsin yarışmada daha sonra iştirak etmək imkanından məhrum etmək hüququnu özündə saxlayır. Bu yarışma istənilən vaxt, əvvəlcədən xəbərdarlıq olmadan ləğv edilə və ya dəyişdirilə bilər. İştirakçıya məxsus hər bir şəxsi məlumat Azərbaycan məlumat qorunması qanunvericiliyinə uyğun olaraq işlənəcəkdir. Əlavə məlumat üçün sorğunu təşkil edən şirkət ilə əlaqə saxlayın. Əlavə məlumat üçün məxfilik siyasətimizə baxın."
        },
    ]

    return (
        <>
            <PageHeader />

            <div className='mt-25 lg:mt-55 w-94/100 lg:w-70/100 mx-auto'>
                <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl'>Ən Çox Verilən Suallar</h2>

                <div className='my-5 lg:my-10'>
                    {
                        faqs.map((item, index) => (
                            <div key={index} className='lg:w-200 mb-5 lg:mb-7'>
                                <button onClick={() => setOpen(open === index ? null : index)} className={`${open === index ? 'border-0' : 'border-b'} w-full hover:text-gray-500 tracking-wide lg:tracking-normal border-gray-300 cursor-pointer pb-3 text-start text-base md:text-lg lg:text-xl`}>
                                    {item.question}
                                </button>

                                {open === index && (
                                    <p className="border-b text-sm md:text-base border-gray-300 pb-3 font-semibold">{item.answer}</p>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Faq
