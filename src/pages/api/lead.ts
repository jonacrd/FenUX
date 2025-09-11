import type { APIRoute } from 'astro';
export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  const fd = await request.formData();
  const hp = String(fd.get('company')||''); if(hp) return new Response(null,{status:200});
  const name = String(fd.get('name')||''); const email = String(fd.get('email')||''); const message = String(fd.get('message')||'');
  console.log('Lead:', {name,email,message});
  // TODO: enviar a email / webhook / discord / notion.
  return new Response(null, { status: 200 });
};
