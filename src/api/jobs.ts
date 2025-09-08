import type { Job, TaskDraft } from '../types/types';

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://peowopdid1.execute-api.eu-west-1.amazonaws.com/dev/jobs';

const USER_TOKEN =
  'eyJraWQiOiJKR3VLOHprN3I2ZmIxRFEzQVwvYjEwWHV1QXduOFVGTVJGTjlzSFpqbkRybz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1Mjk1ZjQxNC1jMDExLTcwYzQtMDVkNC0yMWFhZDEyY2JiMTkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfN3NjcDhDR0ZlIiwiY29nbml0bzp1c2VybmFtZSI6IjUyOTVmNDE0LWMwMTEtNzBjNC0wNWQ0LTIxYWFkMTJjYmIxOSIsIm9yaWdpbl9qdGkiOiIxZGE5OWY0MS1jYjMyLTRmYzAtYTllMC1hZDk4Yjg2MjFkNTYiLCJhdWQiOiI3YmI4ZW9qYW5jNGUyczdmZ3BzaDhsc2d0NiIsImV2ZW50X2lkIjoiODRiYWRkOTYtNDBjYS00ODdhLTg3NzQtMTM5ZTQ5MDhlNmM4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NDU3NTUzMTIsImV4cCI6MTc0NTc1ODkxMiwiaWF0IjoxNzQ1NzU1MzEyLCJqdGkiOiJjYjcyMjBmZS05MDU5LTQxNzQtYjk0YS02Y2UyM2Q3MjBjNGIiLCJlbWFpbCI6Imp1YW5jYXJsb3NsaGhlbGxpbkBnbWFpbC5jb20ifQ.ID0VYYXioz4yjNDhSDEK0rGmJ24d72rlhomjI2wdnwWQb3GW-2AXzccB4G-YYcUsrKSr9hDfwnNAhWQhvzdTTITLi_Re3W88kaX9buUsh0nYNaKM6oPTVC3QZ4OzAS5sAqg7pd4Y6ws08SXWQ-40_SffPyO9N27HhsH8zgGaNQ_R4nWumU6KJTdrw-AUdDbSmK5-CARlrO2edneMFm0sdCA6Vy-uFekRdAXYLvecrbnW40BK2SGuWYgg4ipPrkdLSAFl5NX15yJtim_XDlTucl6YLMR3M7QOP2n_qG3IuJurGjcd-Zw1MWhnP9XQkL2bj83TNCwyquALgDfvL8HMw';

export async function fetchJobs(): Promise<Job[]> {
  const resp = await fetch(`${BASE_URL}/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: USER_TOKEN,
    },
  });
  if (!resp.ok) throw new Error(`Error ${resp.status}`);
  return resp.json();
}

export async function createJob(draft: TaskDraft, userId: string): Promise<Job> {
  const job_id = Date.now().toString();
  const body = {
    job_id,
    title: draft.title!,
    shortDescription: draft.title!,
    longDescription: `${draft.duration} en ${draft.category}`,
    category: draft.category!,
    location: JSON.stringify(draft.area),
    rate: draft.rate!,
    duration: draft.duration!,
    createdAt: new Date().toISOString(),
    postedBy: userId,
  };

  const resp = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (resp.status === 400) {
    const err = await resp.json();
    throw new Error(err.message);
  }
  if (resp.status !== 201) {
    throw new Error(`Error servidor ${resp.status}`);
  }
  const data = await resp.json();
  return data.job as Job;
}

