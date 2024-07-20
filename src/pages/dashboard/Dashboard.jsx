import React, { useContext } from 'react';
// import Layout from '../../../components/layout/Layout';
import myContext from '../../context/myContext';
// import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllBlog, deleteBlogs } = context;
    const navigate = useNavigate();

    //* Logout Function 
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div>
            <div className="py-10">
                <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className="w-40 h-40 object-cover rounded-full border-2 border-pink-600 p-1"
                            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                            alt="profile"
                        />
                    </div>
                    <div className="right">
                        <h1
                            className="text-center font-bold text-2xl mb-2"
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
                            Kamal Nayan Upadhyay
                        </h1>
                        <h2 className="font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            Software Developer
                        </h2>
                        <h2 className="font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            knupadhyay784@gmail.com
                        </h2>
                        <h2 className="font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            <span>Total Blog: </span> 15
                        </h2>
                        <div className="flex gap-2 mt-2">
                            <Link to="/createblog">
                                <button
                                    style={{
                                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                        color: mode === 'dark' ? 'black' : 'white'
                                    }}
                                    className="px-8 py-2"
                                >
                                    Create Blog
                                </button>
                            </Link>
                            <button
                                onClick={logout}
                                style={{
                                    background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                    color: mode === 'dark' ? 'black' : 'white'
                                }}
                                className="px-8 py-2"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Line  */}
                <hr className={`border-2 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}`} />

                {/* Table  */}
                <div>
                    <div className="container mx-auto px-4 max-w-7xl my-5">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* Table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                {/* Thead  */}
                                <thead
                                    style={{ background: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)' }}
                                    className="text-xs"
                                >
                                    <tr>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            S.No
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            Thumbnail
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            Title
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            Category
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            Date
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* Tbody  */}
                                {getAllBlog.length > 0 ? (
                                    <tbody>
                                        {getAllBlog.map((item, index) => {
                                            const { thumbnail, date } = item;
                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b-2"
                                                    style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}
                                                >
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        {index + 1}.
                                                    </td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        <img className="w-16 rounded-lg" src={thumbnail} alt="thumbnail" />
                                                    </td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        {item.blogs.title}
                                                    </td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        {item.blogs.category}
                                                    </td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        {date}
                                                    </td>
                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        <button onClick={() => deleteBlogs(item.id)} className="px-4 py-1 rounded-lg text-white font-bold bg-red-500">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                ) : (
                                    <tbody>
                                        <tr>
                                            <td colSpan="6" className="text-center py-4">
                                                Not Found
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
