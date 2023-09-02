<?php
$portfolioDir = './portfolio/';
$portfolioHoverDir = './portfolio_hover/';

$images = [];

// Retrieve image files from portfolio directory
$portfolioFiles = scandir($portfolioDir);

// Sort the files using natural sorting
natsort($portfolioFiles);

$images = [];

foreach ($portfolioFiles as $file) {
  if ($file !== '.' && $file !== '..') {
    $imagePath = $portfolioDir . $file;
    $hoverImagePath = $portfolioHoverDir . $file;
    $images[] = [
      'src' => $imagePath,
      'alt' => 'Image',
      'hoverSrc' => $hoverImagePath,
    ];
  }
}


// Convert the images array to JSON and send the response
header('Content-Type: application/json');
echo json_encode($images);
