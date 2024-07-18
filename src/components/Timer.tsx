
// import React, { useState, useEffect } from 'react';


// interface TimerProps {
//     initialTime: number;
// }

//  const Timer: React.FC<TimerProps> = ({ initialTime }) => {
//     const [time, setTime] = useState(initialTime);

//     useEffect(() => {
//         if (time > 0) {
//             const timerId = setTimeout(() => setTime(time - 1), 1000);
//             return () => clearTimeout
//             (timerId);
//         }
//     }, [time]);

//     return <span>{time}s</span>;
// }



// export default Timer; 


// src/components/Timer.tsx
// import React, { useState, useEffect } from 'react';

// interface TimerProps {
//     initialTime: number;
// }

// const Timer: React.FC<TimerProps> = ({ initialTime }) => {
//     const [time, setTime] = useState(initialTime);

//     useEffect(() => {
//         if (time > 0) {
//             const timerId = setTimeout(() => setTime(time - 1), 60000); // Изменяем интервал на 60000 миллисекунд (1 минута)
//             return () => clearTimeout(timerId);
//         }
//     }, [time]);

//     const minutes = Math.floor(time / 60); // Вычисляем количество минут
//     const seconds = time % 60; // Вычисляем количество секунд

//     return <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>; // Отображаем время в формате "минуты:секунды"
// }

// export default Timer;

// src/components/Timer.tsx





// import React, { useState, useEffect } from 'react';

// interface TimerProps {
//     initialTime: number;
// }

// const Timer: React.FC<TimerProps> = ({ initialTime }) => {
//     const [time, setTime] = useState(initialTime);

//     useEffect(() => {
//         if (time > 0) {
//             const timerId = setTimeout(() => setTime(time - 1), 1000);
//             return () => clearTimeout(timerId);
//         }
//     }, [time]);

//     const minutes = Math.floor(time / 60); // Вычисляем количество минут
//     const seconds = time % 60; // Вычисляем количество секунд

//     return <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>; // Отображаем время в формате "минуты:секунды"
// }

// export default Timer;

// src/components/Timer.tsx
import React, { useState, useEffect } from 'react';

interface TimerProps {
    initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime * 60); // Умножаем на 60, чтобы перевести в секунды

    useEffect(() => {
        if (time > 0) {
            const timerId = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [time]);

    const minutes = Math.floor(time / 60); // Вычисляем количество минут
    const seconds = time % 60; // Вычисляем количество секунд

    return <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>; // Отображаем время в формате "минуты:секунды"
}

export default Timer;
