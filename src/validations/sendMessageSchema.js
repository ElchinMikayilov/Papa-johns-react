import * as yup from 'yup'

export const sendMessageSchema = yup.object({
    name: yup.string().min(3, "Ad minimum 3 simvol olmalıdı").required("Zəhmət olmasa, adınızı daxil edin"),
    surname: yup.string().required("Zəhmət olmasa, soyadınızı daxil edin"),
    phone: yup.string().matches(/^(050|051|055|070|077|099|010|060|011|012)[0-9]{7}$/,
        "Zəhmət olmasa, düzgün mobil nömrə daxil edin"
    ).required("Zəhmət olmasa, mobil nömrənizi daxil edin"),
    email: yup.string().email("Zəhmət olmasa, doğru email daxil edin").required("Zəhmət olmasa, email daxil edin"),
    message: yup.string().max(30, "Mesaj maksimum 30 simvol ola bilər")
})