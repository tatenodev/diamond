/* global ethers */
/* eslint prefer-const: "off" */

async function deployFacet() {
  // const Facet = await ethers.getContractFactory('FacetA');
  const Facet = await ethers.getContractFactory('MyNFTFacet');
  const facet = await Facet.deploy();
  await facet.deployed();
  console.log('MyNFTFacet deployed:', facet.address);

  return facet.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployFacet().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
