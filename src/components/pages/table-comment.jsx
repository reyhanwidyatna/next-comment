"use client";

import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';
import { useComments } from '@/context/commentContext';
import CustomNavbar from './custom-navbar';
import useAuthRedirect from '@/hooks/authRedirect';

const CommentsTable = ({ data }) => {
  useAuthRedirect();
  const {comments, setComments, removeComment} = useComments();
  const [stateComments, setStateComments] = useState(comments || data);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      setComments(data);
    }
  }, [data, setComments]);

  useEffect(() => {
    setStateComments(comments);
  }, [comments]);

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search === '') {
      setStateComments(comments || data);
    } else {
      const searchedData = (comments || data).filter((comment) =>
        comment.name.toLowerCase().includes(search.toLowerCase()) ||
        comment.email.toLowerCase().includes(search.toLowerCase()) ||
        comment.body.toLowerCase().includes(search.toLowerCase())
      );
      setStateComments(searchedData);
    }
  }

  const handleDelete = (id) => {
    removeComment(id);
  };

  const actionTemplate = (item) => {
    return (
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(item.id)}
      >
        <i className="pi pi-trash"></i>
      </button>
    );
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <p className="text-xl text-900 font-bold mb-0">
        Data Komentar
      </p>
      <Link href="/create">
        <button type="button" className="btn btn-primary">
          Tambah
        </button>
      </Link>
    </div>
  );
  const footer = `Total Data: ${stateComments ? stateComments.length : 0} komentar`;

  return (
    <div className="w-full h-full px-4">
      <div className="flex justify-end items-center gap-4 my-4"> 
        <div className="col-12 col-md-3 col-lg-3 p-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari komentar..."
              aria-label="Cari Komentar"
              aria-describedby="basic-addon1"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <DataTable
        value={stateComments}
        header={header}
        footer={footer}
        stripedRows
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column field="name" header="Nama"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="body" header="Komentar"></Column>
        <Column body={actionTemplate} header="Aksi"></Column>
      </DataTable>
    </div>
  );
}

export default CustomNavbar(CommentsTable);