<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>POLIBOOKS Bookstore</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <!-- Optional Bootstrap theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.css">
</head>
<body>


<?php
include_once "connexion.php";
$id = htmlspecialchars($_GET['id']);

$req1 = "SELECT * FROM `polibook` WHERE `id`='$id'";
$res1 = $pdo->query($req1);
$result1 = $res1->fetchAll(PDO::FETCH_ASSOC);
$res1 = $pdo->query($req1);

?>
  <header>
  <div class="bg-white">
    <div class="container">
      <div class="row pt-3 pb-3">
        <div class="col">
          <a href="index.html"><img src="LOGOTEXT.png" alt="Our cool logo"  width="100%"></a>
                </div>
        <div class="col">
          <h6 class="text-center"><a class="text-dark" href="#">BEST-SELLERS</a></h6>
        </div>
        <div class="col">
          <h6 class="text-center"><a class="text-dark" href="books.php">BOOKS</a></h6>
        </div>
        <div class="col">
          <h6 class="text-center"><a class="text-dark" href="authors.html">AUTHORS</a></h6>
        </div>
        <div class="col">
          <h6 class="text-center"><a class="text-dark" href="events.html">EVENTS</a></h6>
        </div>
        <div class="col">
          <h6 class="text-center"><a class="text-dark" href="log-reg.html">LOGIN/REGISTER</a></h6>
        </div>
      </div>
    </div>
  </div>
  </header>
    <hr>
    <main>


      <div class="container">
        <div class="row">

        <div class="col-lg-4">
          <div class="row">
            <aside class="col-lg-12">
              <section class="col-sm-12">
                <div class="text-center">
                  <?php 
                    while ($row1 = $res1->fetch()){
                      $title = htmlspecialchars($row1['title']);
                      $author = htmlspecialchars($row1['author']);
                      $genre = htmlspecialchars($row1['genre']);
                      $date = htmlspecialchars($row1['date']);
                      $price = htmlspecialchars($row1['price']);
                      $description = htmlspecialchars($row1['description']);
                      $description_author = htmlspecialchars($row1['description_author']);
                      $imag = "<img src='avatar/{$row1['image']}' width='50%'/></a>";
                      echo $imag;
                    } ?>
                  <br><br><br><br>
                </div>
              </section>
            </aside>
            <aside class="col-lg-12">
              <div class="text-center">
              <h5>Related Books</h5>
            </div>
              <div class="bg-white"> <!-- Books -->
        <div class="container">
          <div class="row mx-2">
            <div class="col-md-4 bg-white py-3"> <!-- book -->
              <div class="row">
                <div class="col">
                  <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" width="70%" alt="No book yet">
                </div>

              </div>
            </div>
            <div class="col-md-4 bg-white py-3"> <!-- book -->
              <div class="row">
                <div class="col">
                  <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" width="70%" alt="No book yet">
                </div>

              </div>
            </div>
            <div class="col-md-4 bg-white py-3"> <!-- book -->
              <div class="row">
                <div class="col">
                  <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" width="70%" alt="No book yet">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            </aside>
          </div>
        </div>

        <section class="col-lg-8">

          <div class="text-center">
          <h5 class="text-dark"></h5>
          </div>
          <br>
          <ul class="list-unstyled">
  

            <li>Genre : <?php echo $genre ?></li>
            <li>Author : <?php echo $author ?></li>
            <li>Release Date : <?php echo $date ?></li>
            <li>Price : <?php echo $price ?></li>
          </ul>
          <div class="text-center">
          <h6 class="text-dark">Description : <?php echo $description ?></h6>
          <br>
          </div>
          <ul class="list-unstyled"><li><p>Description of the author : <?php echo $description_author ?></p></li></ul>
          <div class="text-center">
          <h6 class="text-dark">Reviews</h6>
          </div>


        </section>
      </div>
    </div>




    </main>
    <footer>
      <hr>

      <div class="bg-white">
        <div class="container">
          <div class="row pt-3 pb-1">

            <div class="col-md-4">
              <h5 class="text-center"><a class="text-muted " href="#">FAQ</a></h4>
            </div>

            <div class="col-md-4">
              <h5 class="text-center"><a class="text-muted" href="#">Shipping</a></h4>
            </div>

            <div class="col-md-4">
              <h5 class="text-center"><a class="text-muted" href="#">Contact us</a></h4>
            </div>

          </div>
          <div class="row">
            <!--<p>We should do something with this lower bar, as it is this low it is eclipsed by the other information above, and it seems that the website ends before the FAQ. This makes the placement anti-intuitive.</p>
            -->
          </div>
        </div>
      </div>
    </footer>
    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
