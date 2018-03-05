const form = $('#search-form');
const search = $('#search-keyword');
const $container = $('#contenedor');

$.ajax({
 dataType : "json",
 url: "https://api.instagram.com/v1/users/self?access_token=2317743337.cd7c917.a9918dea62654183b89254818750378f"
}).done(getData).fail(function (status) {
 console.log("error");
})

function getData(data) {
  let name= data.data.username;
  console.log(data);
  console.log(name);
  let picture = data.data.profile_picture;
  let fullName = data.data.full_name;
  let followers = data.data.counts.followed_by;
  let fotos = data.data.counts.media;
  let tarjeta = `<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src=${picture}>
          <span class="card-title">${name}</span>
        </div>
        <div class="card-content">
          <p>Hola yo soy ${fullName}. Tengo ${followers} segudores y he compartido ${fotos} fotos.</p>
        </div>
        <div class="card-action">
          <a href="https://www.instagram.com/${name}">Mi perfil</a>
        </div>
      </div>
    </div>
  </div> <!--end CARD -->
`
$container.html(tarjeta);
};
