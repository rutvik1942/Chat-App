import Avtaar from '../../assets/user.svg';
import Input from '../../components/Input';
const Dashboard = () => {
    const contacts= [
        {
            name: 'Rutvik',
            status: 'Available',
            img: Avtaar
        },
        {
            name: 'AJ',
            status: 'Available',
            img: Avtaar
        },
        {
            name: 'Pandey',
            status: 'Available',
            img: Avtaar
        },
        {
            name: 'Tiwari',
            status: 'Available',
            img: Avtaar
        },
        {
            name: 'Rana',
            status: 'Available',
            img: Avtaar
        },
        {
            name: 'Tailor',
            status: 'Available',
            img: Avtaar
        }
    ]
    return(
        <div className="w-screen flex">
            <div className="w-[25%] border h-screen bg-primary">
                <div className='flex mx-14 items-center my-8'>
                    <div className='border border-primary p-[3px] rounded-full'><img src={Avtaar} width="50px" height="50px" alt="Avtaar"></img></div>
                    <div className='ml-8'>
                        <h3 className='text-xl'>Chat App</h3>
                        <p className='text-gl'>My Acccount</p>
                    </div>
                </div>
                <hr />
                <div className='mx-14 mt-10'>
                    <div className='text-[#0a62e5] text-lg'>Messages</div>
                    <div>
                        {
                              contacts.map(({ name, status, img }) => {
                                return(
                                    <div>
                                        <div className='flex items-center py-4 border-b border-b-gray-300'>
                                            <div className="cursor-pointer flex items-center">
                                                <div>
                                                    <img src={img} width="30px" height="30px" alt="Avtaar"></img>
                                                </div>
                                                <div className='ml-8'>
                                                    <h3 className='text-lg font-semibold'>{name}</h3>
                                                    <p className='text-sm font-light text-gray-600'>{status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                <div className='w-[75%] bg-primary h-[80px] mt-14 rounded-full flex items-center px-14 shadow-md'>
                    <div>
                        <img src={Avtaar} width={40} height={40} alt="Avtaar"></img>
                    </div>
                    <div className='ml-5 mr-auto'>
                        <h3 className='text-lg'>Rutvik</h3>
                        <p className='text-sm font-light text-gray-600'>Online</p>
                    </div> 
                    <div className='cursor-pointer'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg> 
                    </div>
                </div>
                <div className='h-[75%] w-full overflow-y-scroll shadow-sm'>
                    <div className='p-14'>
                        <div className='max-w-[45%] bg-primary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-[#0093ff] rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-primary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-[#0093ff] rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-primary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-[#0093ff] rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-primary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-[#0093ff] rounded-b-xl rounded-tr-xl ml-auto p-4 text-white mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[45%] bg-primary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>

                </div>
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message...' className='w-[75%]' inputClassName='p-2 border shadow-md rounded-full bg-primary focus:ring-0 focus:border-0 outline-none'/>
                    <div className="ml-4 p-2 cursor-pointer bg-[#f6f8fa ] shadow-md rounded-full">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    </div>
                    <div className="ml-4 p-2 cursor-pointer bg-[#f6f8fa ] shadow-md rounded-full">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    </div>
                </div>  
            </div>
            <div className="w-[25%] border h-screen bg-light"></div>
        </div>
    )
}

export default  Dashboard;