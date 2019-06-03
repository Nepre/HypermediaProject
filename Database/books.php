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
// On récupère tout le contenu de la table jeux_video
$req1 = "SELECT * FROM `polibook` WHERE `id`='1'";
$res1 = $pdo->query($req1);
$result1 = $res1->fetchAll(PDO::FETCH_ASSOC);
$res1 = $pdo->query($req1);

$req2 = "SELECT * FROM `polibook` WHERE `id`='2'";
$res2 = $pdo->query($req2);
$result2 = $res2->fetchAll(PDO::FETCH_ASSOC);
$res2 = $pdo->query($req2);

$req3 = "SELECT * FROM `polibook` WHERE `id`='3'";
$res3 = $pdo->query($req3);
$result3 = $res3->fetchAll(PDO::FETCH_ASSOC);
$res3 = $pdo->query($req3);

$req4 = "SELECT * FROM `polibook` WHERE `id`='4'";
$res4 = $pdo->query($req4);
$result4 = $res4->fetchAll(PDO::FETCH_ASSOC);
$res4 = $pdo->query($req4);

$req5 = "SELECT * FROM `polibook` WHERE `id`='5'";
$res5 = $pdo->query($req5);
$result5 = $res5->fetchAll(PDO::FETCH_ASSOC);
$res5 = $pdo->query($req5);



?>
    <!-- HEADER -->
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
            <h6 class="text-center"><a class="text-dark-selected" href="books.html">BOOKS</a></h6>
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
    <!-- HEADER -->
    <hr>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="container"> <!-- Row 1 conatiner -->
              <div class="row"> <!-- Row 1 -->
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <?php 
                        while ($row1 = $res1->fetch()){
                          $id = htmlspecialchars($row1['id']);
                          $t1 = htmlspecialchars($row1['title']);
                          $title1 = "<a class='text-products' href='Single_book.php?id=$id'>".$t1."</a>";
                          $author1 = htmlspecialchars($row1['author']);
                          $imag1 = "<img src='avatar/{$row1['image']}' width='100%'/></a>";
                          echo $imag1; } ?>
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><?php echo $title1 ?></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by <?php echo $author1 ?>. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <?php 
                        while ($row2 = $res2->fetch()){
                          $id = htmlspecialchars($row2['id']);
                          $t2 = htmlspecialchars($row2['title']);
                          $title2 = "<a class='text-products' href='Single_book.php?id=$id'>".$t2."</a>";
                          $author2 = htmlspecialchars($row2['author']);
                          $imag2 = "<img src='avatar/{$row2['image']}' width='100%'/></a>";
                          echo $imag2; } ?>
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><?php echo $title2 ?></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by <?php echo $author2 ?>. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <?php 
                        while ($row3 = $res3->fetch()){
                          $id = htmlspecialchars($row3['id']);
                          $t3 = htmlspecialchars($row3['title']);
                          $title3 = "<a class='text-products' href='Single_book.php?id=$id'>".$t3."</a>";
                          $author3 = htmlspecialchars($row3['author']);
                          $imag3 = "<img src='avatar/{$row3['image']}' width='100%'/></a>";
                          echo $imag3; } ?>
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><?php echo $title3 ?></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by <?php echo $author3 ?>. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container"> <!-- Row 1 conatiner -->
              <div class="row"> <!-- Row 1 -->
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <?php 
                        while ($row4 = $res4->fetch()){
                          $id = htmlspecialchars($row4['id']);
                          $t4 = htmlspecialchars($row4['title']);
                          $title4 = "<a class='text-products' href='Single_book.php?id=$id'>".$t4."</a>";
                          $author4 = htmlspecialchars($row4['author']);
                          $imag4 = "<img src='avatar/{$row4['image']}' width='100%'/></a>";
                          echo $imag4; } ?>
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><?php echo $title4 ?></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by <?php echo $author4 ?>. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <?php 
                        while ($row5 = $res5->fetch()){
                          $id = htmlspecialchars($row5['id']);
                          $t5 = htmlspecialchars($row5['title']);
                          $title5 = "<a class='text-products' href='Single_book.php?id=$id'>".$t5."</a>";
                          $author5 = htmlspecialchars($row5['author']);
                          $imag5 = "<img src='avatar/{$row5['image']}' width='100%'/></a>";
                          echo $imag5; } ?>
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><?php echo $title5 ?></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by <?php echo $author5 ?>. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:10em;" alt="No book yet">
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><a class="text-products" href="single_book.php">Book 6</a></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by X. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container"> <!-- Row 1 conatiner -->
              <div class="row"> <!-- Row 1 -->
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:10em;" alt="No book yet">
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><a class="text-products" href="single_book.php">Book 7</a></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by X. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:10em;" alt="No book yet">
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><a class="text-products" href="single_book.php">Book 8</a></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by X. Worldwide famous for its Y. Despite its length it goes by flying.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 bg-white py-3"> <!-- book -->
                  <div class="row">
                    <div class="col">
                      <img src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:10em;" alt="No book yet">
                    </div>
                    <div class="col">
                      <div class="row">
                        <h5><a class="text-products" href="single_book.php">Book 9</a></h5>
                      </div>
                      <div class="row pr-3">
                        <p>This is a book written by X. Worldwide famous for its Y. Despite its length it goes by flying.</p>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-2" id="filtros">
            <div class="row mt-3 ml-3">
              <div class="custom-control custom-radio">
                <input type="radio" name="filters" class="custom-control-input" value="Available" id="Available">
                <label class="custom-control-label" for="Available"> <h6>AVAILABLE</h6> </label>
              </div>
            </div>
            <div class="row mt-5 ml-3">
              <div class="custom-control custom-radio">
                <input type="radio" name="filters" class="custom-control-input" value="Author" id="Author">
                <label class="custom-control-label" for="Author"> <h6>BY AUTHOR</h6> </label>
              </div>
            </div>
            <div class="row mt-5 ml-3">
              <div class="custom-control custom-radio">
                <input type="radio" name="filters" class="custom-control-input" value="Genre" id="Genre">
                <label class="custom-control-label" for="Genre"> <h6>BY GENRE</h6> </label>
              </div>
            </div>
            <div class="row mt-5 ml-3">
              <div class="custom-control custom-radio">
                <input type="radio" name="filters" class="custom-control-input" value="Theme" id="Theme">
                  <label class="custom-control-label" for="Theme"> <h6>BY THEME</h6> </label>
              </div>
            </div>
            </div>
          </div>

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
              <h5 class="text-center"><a class="text-muted" href="shipping.html">Shipping</a></h4>
            </div>

            <div class="col-md-4">
              <h5 class="text-center"><a class="text-muted" href="contact_us.html">Contact us</a></h4>
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
