"use client";

import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';

const CommentsTable = ({ data }) => {
  const [comments, setComments] = useState(data);
  const [initialComment] = useState(data);

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search === '') {
      setComments(initialComment);
    } else {
      const searchedData = initialComment.filter((comment) =>
        comment.name.toLowerCase().includes(search.toLowerCase()) ||
        comment.email.toLowerCase().includes(search.toLowerCase()) ||
        comment.body.toLowerCase().includes(search.toLowerCase())
      );
      setComments(searchedData);
    }
  }

  const handleDelete = (id) => {
    setComments((prevComments) => prevComments.filter(comment => comment.id !== id));
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
  const footer = `Total Data: ${comments ? comments.length : 0} komentar`;

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-4 my-4"> 
        <div className="w-1/4">
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
        value={comments}
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

export default CommentsTable;