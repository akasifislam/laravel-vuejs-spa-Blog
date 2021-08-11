<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>Tag List</h2>

<table>
  <tr>
    <th>SL</th>
    <th>Name</th>
    <th>Created By</th>
  </tr>
    @foreach ($data as $key=>$tag)   
    <tr>
      <td> {{ $key+1 }} </td>
      <td>{{ $tag->name }}</td>
      <td>{{ $tag->created_at }}</td>
    </tr>
    @endforeach
</table>

</body>
</html>