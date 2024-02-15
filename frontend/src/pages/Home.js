import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../component/Spinner'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineAddBox } from 'react-icons/md'
import { MdOutlineDelete } from 'react-icons/md'

export default function Home() {
  const [book,setBook] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios
        .get('http://localhost:5555/book')
        .then((resp)=>{
          setBook(resp.data.data);
          setLoading(false)
        })
        .catch((error)=>{
          console.log(error);
          setLoading(false)
        })
  },[])

  return (
    <div className=' p-4'>
      <div className=' flex justify-between items-center'>
        <h1 className=' text-3xl m-8'>Book List</h1>
        <Link to='/book/create'>
          <MdOutlineAddBox className=" text-sky-800 text-4xl"/>
        </Link>
      </div>
      {
        loading ? (
          <Spinner/>
        ) : (
          <table className=' w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className=' border border-slate-600 rounded-md'>No</th>
                <th className=' border border-slate-600 rounded-md'>Title</th>
                <th className=' border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className=' border border-slate-600 rounded-md max-md:hidden'>Public Year</th>
                <th className=' border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                book.map((bk,index)=>(
                  <tr key={bk._id} className=' h-8'>
                    <td className=' border border-slate-700 rounded-md text-center'>{index + 1}</td>
                    <td className=' border border-slate-700 rounded-md text-center'>{bk.title}</td>
                    <td className=' border border-slate-700 rounded-md text-center max-md:hidden'>{bk.author}</td>
                    <td className=' border border-slate-700 rounded-md text-center max-md:hidden'>{bk.publishYear}</td>
                    <td className=' border border-slate-700 rounded-md text-center'>
                      <div className=' flex justify-center gap-x-4'>
                        <Link to={`/book/detail/${bk._id}`}>
                          <BsInfoCircle className=' text-2xl text-green-800'/>
                        </Link>
                        <Link to={`/book/edit/${bk._id}`}>
                          <AiOutlineEdit className=' text-2xl text-yellow-600'/>
                        </Link>
                        <Link to={`/book/delete/${bk._id}`}>
                          <MdOutlineDelete className=' text-2xl text-red-600'/>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}
