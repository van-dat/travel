
import { parse, isWithinInterval } from 'date-fns';
export const FncheckTime = (period: string, checkTime: string) => {
    const [startTime, endTime] = period.split('-').map((time) => time.trim())

    const timeToDate = (time: any) => parse(time, 'HH:mm', new Date());

    const start = timeToDate(startTime);
    const end = timeToDate(endTime);
    const check = timeToDate(checkTime);



    return isWithinInterval(check, { start, end });
}

export const convertPrice = (price: string) => {
    return price.toLocaleString("vi-VN")
}