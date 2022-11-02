/* global ethers */
/* eslint prefer-const: "off" */

async function deployFacet() {
  // const FacetA = await ethers.getContractFactory('FacetA');
  const FacetA = await ethers.getContractFactory('MyNFTFacet');
  const facetA = await FacetA.deploy();
  await facetA.deployed();
  console.log('MyNFTFacet deployed:', facetA.address);

  return facetA.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployFacet().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
