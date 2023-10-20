
export const chartData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const subscriptionRequest = [
    {
        key: '1',
        name: 'Jithin',
        email: 'jb@gmail.com',
        phoneNumber: '1234567890',
        requestedOn: '12 Aug 2023',
        discipline: 'Violin',
    },
    {
        key: '2',
        name: 'Martin',
        email: 'martin@gmail.com',
        phoneNumber: '1234567890',
        requestedOn: '11 Aug 2023',
        discipline: 'Keyboard',
    }
];

export const courses = [
    {
        key: '1',
        data: {
            title: 'Violin Parts',
            isEdit: true,
            courseType: 'Free Course',
            isNewTopic: true,
            isPrint: false,
            isVideo: false,
        },
        children: [
            {
                key: '1-1',
                data: {
                    title: 'Know your voilin',
                    isEdit: true,
                    courseType: '',
                    isNewTopic: false,
                    isPrint: true,
                    isVideo: true,
                },
            },
            {
                key: '1-2',
                data: {
                    title: 'Bow Holding',
                    isEdit: true,
                    courseType: '',
                    isNewTopic: false,
                    isPrint: false,
                    isVideo: true,
                },
            }
        ],
    },
    {
        key: '2',
        data: {
            title: 'Study of Strings',
            isEdit: true,
            courseType: 'Free Course',
            isNewTopic: true,
            isPrint: false,
            isVideo: false,
        },
        children: [
            {
                key: '2-1',
                data: {
                    title: 'A String',
                    isEdit: true,
                    courseType: 'Free Topic',
                    isNewTopic: false,
                    isPrint: true,
                    isVideo: true,
                },
            },
            {
                key: '2-2',
                data: {
                    title: 'E String',
                    isEdit: true,
                    courseType: 'Free Topic',
                    isNewTopic: false,
                    isPrint: true,
                    isVideo: true,
                },
            },
            {
                key: '2-3',
                data: {
                    title: 'D String',
                    isEdit: true,
                    courseType: 'Free Topic',
                    isNewTopic: false,
                    isPrint: true,
                    isVideo: true,
                },
            }
        ],
    }

]

export const subscriptions = [
    {
        key: '1',
        name: 'Jithin',
        email: 'jb@gmail.com',
        phoneNumber: '1234567890',
        joinedOn: '12 Aug 2023',
        discipline: ['Violin', 'Keyboard'],
    },
    {
        key: '2',
        name: 'Martin',
        email: 'martin@gmail.com',
        phoneNumber: '1234567890',
        joinedOn: '11 Aug 2023',
        discipline: ['Keyboard'],
    }
];