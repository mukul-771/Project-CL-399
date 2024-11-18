import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
  text-align: center;
  max-width: 800px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.active ? '#0b59de' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#0947b3' : '#e0e0e0'};
  }
`;

const SearchBarContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SelectionCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 60px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  ${props => props.selected && `
    border: 2px solid #0b59de;
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(11, 89, 222, 0.2);
  `}
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #222;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #444;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const PropertyTag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.9em;
  color: #666;
`;

const SelectButton = styled.button`
  background-color: ${props => props.selected ? '#28a745' : '#0b59de'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: background-color 0.2s;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);

  &:hover {
    background-color: ${props => props.selected ? '#218838' : '#0947b3'};
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const DeselectButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #bb2d3b;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CrossIcon = styled.span`
  color: white;
  font-size: 1.1em;
`;

const GraphContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const NoSelectionMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1em;
`;

const SelectedItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SelectedItem = styled.div`
  background: #f0f7ff;
  padding: 10px 20px;
  border-radius: 8px;
  color: #0b59de;
  font-weight: 500;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StructureImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin: 10px 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #dee2e6;
  transition: transform 0.3s ease;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const DownloadButton = styled.button`
  background-color: #198754;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;

  &:hover {
    background-color: #157347;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
);

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Dummy data arrays
const Peptides = [
  'IMVTESSDYSSY (GrBP5)',
  'VDAQSKSYTLHD (BP7)',
  'GAMHLPWHMGTL',
  'DELERRIRELEARIK',
  'HSSYWYAFNNKT (P1)',
  'AEAEAKAKAEAEAKAK',
  'WAGAKRLVLRRE (AuBP1)',
  'CGPWAGAKRLVLRREGPC (AuBP1-cyclic)',
  'WALRRSIRRQSY (AuBP2)',
  'CGPWALRRSIRRQSYGPC (AuBP2-cyclic)',
  'MHGKTQATSGTIQS',
  'LKAHLPPSRLPS',
  'VSGSSPDS (p8#9)',
  'TSNAVHPTLRHL (Pd4)',
  'PTSTGQA',
  'TLTTLTN',
  'SSFPQPN',
  'CSQSVTSTKSC',
  'AYSSGAPPMPPF (Ag3)',
  'NPSSLFRYLPSD (Ag4)',
  'TGIFKSARAMRN (AgBP1)',
  'EQLGVRKELRGV (AgBP2)',
  'KSLSRHDHIHHH',
  'MHRSDLMSAAVR',
  'MSPHPHPRHHHT',
  'RGRRRRLSCRLL',
  'CHKKPSKSC',
  'AHKKPSKSA',
  'QPYLFATDSLIK',
  'GHTHYHAVRTQT',
  'RKLPDAPGMHTW',
  'GMTCAAC',
  'GTGSQAS (MAP)'
];

const surface = [
  'Pyrolytic Graphite (HOPG)',
  'Graphene',
  'BN Nanospheres',
  'Gold Surface',
  'Palladium',
  'Platinum',
  'Silver',
  'Ag(111)',
  'Silica',
  'Titanium',
  'Mercury'
];

const PEPTIDE_IMAGES = {
  'IMVTESSDYSSY': '/peptide_images/GrBP5.png',
  'VDAQSKSYTLHD': '/peptide_images/BP7.png',
  'GAMHLPWHMGTL': '/peptide_images/graphite_binding.png',
  'DELERRIRELEARIK': '/peptide_images/graphite_binding.png',
  'HSSYWYAFNNKT': '/peptide_images/P1.png',
  'WAGAKRLVLRRE': '/peptide_images/AuBP1.png',
  'WALRRSIRRQSY': '/peptide_images/AuBP2.png',
  'MHGKTQATSGTIQS': '/peptide_images/MHGKTQATSGTIQS.png',
  'TSNAVHPTLRHL': '/peptide_images/TSNAVHPTLRHL.png',
  'AYSSGAPPMPPF': '/peptide_images/AYSSGAPPMPPF.png',
  'NPSSLFRYLPSD': '/peptide_images/NPSSLFRYLPSD.png',
  'TGIFKSARAMRN': '/peptide_images/TGIFKSARAMRN.png',
  'EQLGVRKELRGV': '/peptide_images/EQLGVRKELRGV.png',
  'KSLSRHDHIHHH': '/peptide_images/KSLSRHDHIHHH.png',
  'MHRSDLMSAAVR': '/peptide_images/MHRSDLMSAAVR.png',
  'MSPHPHPRHHHT': '/peptide_images/MSPHPHPRHHHT.png',
  'RGRRRRLSCRLL': '/peptide_images/RGRRRRLSCRLL.png',
  'GTGSQAS': '/peptide_images/GTGSQAS.png',
  
};

const SURFACE_IMAGES = {
  'Pyrolytic Graphite (HOPG)': '/surface_images/hopg.png',
  'Graphene': '/surface_images/graphene.png',
  'BN Nanospheres': '/surface_images/bn.png',
  'Gold Surface': '/surface_images/gold.png',
  'Palladium': '/surface_images/palladium.png',
  'Platinum': '/surface_images/platinum.png',
  'Silver': '/surface_images/silver.png',
  'Ag(111)': '/surface_images/ag111.png',
  'Silica': '/surface_images/silica.png',
  'Titanium': '/surface_images/titanium.png',
  'Mercury': '/surface_images/mercury.png',
  
};

const getPeptideInfo = (sequence) => {
  const data = {
    'IMVTESSDYSSY': {
      name: 'GrBP5',
      properties: ['Graphite-binding'],
      source: 'https://pubs.acs.org/doi/10.1021/nn204631x',
      substrate: 'Pyrolytic Graphite (HOPG)',
      selectionMethod: 'Phage Display'
    },
    'VDAQSKSYTLHD': {
      name: 'BP7',
      properties: ['Graphene-binding', 'BN Nanosphere-binding'],
      pI: 5.39,
      source: 'https://pubs.rsc.org/en/content/articlelanding/2012/nr/c2nr31189e',
      substrate: 'Graphene, BN Nanospheres',
      bindingEnergy: { hBN: -29.5, graphene: -33.5 },
      selectionMethod: 'Phage display'
    },
    'GAMHLPWHMGTL': {
      name: 'Unknown',
      properties: ['HOPG-binding'],
      pI: 6.92,
      source: 'https://pubs.acs.org/doi/10.1021/nl102564d',
      substrate: 'HOPG',
      selectionMethod: 'Phage Display'
    },
    'DELERRIRELEARIK': {
      name: 'Unknown',
      properties: ['Graphite-binding'],
      source: 'https://pubs.acs.org/doi/full/10.1021/la901342r',
      substrate: 'Graphite'
    },
    'HSSYWYAFNNKT': {
      name: 'P1',
      properties: ['SWNT-binding', 'HOPG-binding', 'h-BN-binding'],
      source: 'https://pubs.acs.org/doi/10.1021/nl051899r',
      substrate: 'SWNT, HOPG, h-BN',
      bindingEnergy: { graphene: -35.6, hBN: -33.0 },
      selectionMethod: 'Combinatorial phage peptide display library'
    },
    'WAGAKRLVLRRE': {
      name: 'AuBP1',
      properties: ['Gold-binding'],
      pI: 11.7,
      charge: 3,
      source: 'https://pubs.acs.org/doi/10.1021/la801468c',
      substrate: 'Gold Surface',
      selectionMethod: 'FliTrx-selected'
    },
    'WALRRSIRRQSY': {
      name: 'AuBP2',
      properties: ['Gold-binding'],
      pI: 12.0,
      charge: 4,
      source: 'https://pubs.acs.org/doi/10.1021/la801468c',
      substrate: 'Gold Surface',
      selectionMethod: 'FliTrx-selected'
    },
    'MHGKTQATSGTIQS': {
      name: 'Unknown',
      properties: ['Gold-binding'],
      pI: 8.52,
      charge: 1,
      source: 'https://doi.org/10.1006/jmbi.2000.3682',
      substrate: 'Gold Surface'
    },
    'TSNAVHPTLRHL': {
      name: 'Pd4',
      properties: ['Palladium-binding'],
      pI: 9.5,
      charge: 1,
      source: 'https://pubs.acs.org/doi/10.1021/nn9002709',
      substrate: 'Palladium',
      selectionMethod: 'Phage Display'
    },
    'AYSSGAPPMPPF': {
      name: 'Ag3',
      properties: ['Silver-binding'],
      pI: 5.57,
      charge: 0,
      source: 'https://www.nature.com/articles/nmat758',
      substrate: 'Silver',
      selectionMethod: 'Combinatorial phage display peptide library'
    },
    'NPSSLFRYLPSD': {
      name: 'Ag4',
      properties: ['Silver-binding'],
      pI: 5.84,
      charge: 0,
      source: 'https://www.nature.com/articles/nmat758',
      substrate: 'Silver',
      selectionMethod: 'Combinatorial phage display peptide library'
    },
    'TGIFKSARAMRN': {
      name: 'AgBP1',
      properties: ['Silver-binding'],
      pI: 12,
      substrate: 'Ag(111)',
      selectionMethod: 'FliTrx bacterial surface library'
    },
    'EQLGVRKELRGV': {
      name: 'AgBP2',
      properties: ['Silver-binding'],
      substrate: 'Ag(111)',
      selectionMethod: 'FliTrx bacterial surface library'
    },
    'KSLSRHDHIHHH': {
      name: 'Unknown',
      properties: ['Silica-binding'],
      pI: 8.8,
      source: 'https://pubs.acs.org/doi/10.1021/ja211307u',
      substrate: 'Silica',
      selectionMethod: 'Biopanning'
    },
    'MHRSDLMSAAVR': {
      name: 'Unknown',
      properties: ['Silica-binding'],
      pI: 9.4,
      source: 'https://pubs.acs.org/doi/10.1021/ja211307u',
      substrate: 'Silica',
      selectionMethod: 'Biopanning'
    },
    'MSPHPHPRHHHT': {
      name: 'Unknown',
      properties: ['Silica-binding'],
      pI: 9.6,
      source: 'https://pubs.acs.org/doi/10.1021/ja211307u',
      substrate: 'Silica',
      selectionMethod: 'Biopanning'
    },
    'RGRRRRLSCRLL': {
      name: 'Unknown',
      properties: ['Silica-binding'],
      pI: 12.3,
      source: 'https://pubs.acs.org/doi/10.1021/ja211307u',
      substrate: 'Silica',
      selectionMethod: 'Biopanning'
    },
    'GTGSQAS': {
      name: 'MAP',
      properties: ['Gold-binding'],
      source: 'https://pubs.acs.org/doi/10.1021/acs.langmuir.8b02563',
      substrate: 'Gold Surface',
      selectionMethod: 'Microfluidic biopanning',
      bindingConstants: {
        Kd: '2.83 µM',
        kon: '2.8 × 10^4 M⁻¹s⁻¹',
        koff: '7.92 × 10⁻² s⁻¹'
      }
    }
  };

  return data[sequence] || {
    name: sequence.includes('(') ? sequence.match(/\((.*?)\)/)[1] : 'Unknown',
    properties: ['Binding peptide'],
    source: 'CSV Database'
  };
};

const getSurfaceInfo = (surfaceName) => {
  const data = {
    'Pyrolytic Graphite (HOPG)': {
      properties: ['Conductive', 'Layered structure'],
      type: 'Carbon-based',
      characteristics: {
        conductivity: 'High',
        structure: 'Layered',
        stability: 'Excellent'
      }
    },
    'Graphene': {
      properties: ['Conductive', '2D material'],
      type: 'Carbon-based',
      characteristics: {
        conductivity: 'High',
        structure: 'Single-layer',
        stability: 'Good'
      }
    },
    'BN Nanospheres': {
      properties: ['Insulating', 'Spherical'],
      type: 'Ceramic',
      characteristics: {
        conductivity: 'Low',
        structure: 'Spherical',
        stability: 'Excellent'
      }
    },
    'Gold Surface': {
      properties: ['Conductive', 'Noble metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Crystalline',
        stability: 'Excellent'
      }
    },
    'Palladium': {
      properties: ['Conductive', 'Transition metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Crystalline',
        stability: 'Good'
      }
    },
    'Platinum': {
      properties: ['Conductive', 'Noble metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Crystalline',
        stability: 'Excellent'
      }
    },
    'Silver': {
      properties: ['Conductive', 'Noble metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Crystalline',
        stability: 'Good'
      }
    },
    'Ag(111)': {
      properties: ['Conductive', 'Crystallographic face'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Crystalline (111)',
        stability: 'Good'
      }
    },
    'Silica': {
      properties: ['Insulating', 'Oxide'],
      type: 'Ceramic',
      characteristics: {
        conductivity: 'Low',
        structure: 'Amorphous/Crystalline',
        stability: 'Excellent'
      }
    },
    'Titanium': {
      properties: ['Conductive', 'Transition metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'Moderate',
        structure: 'Crystalline',
        stability: 'Excellent'
      }
    },
    'Mercury': {
      properties: ['Conductive', 'Liquid metal'],
      type: 'Metal',
      characteristics: {
        conductivity: 'High',
        structure: 'Liquid',
        stability: 'Variable'
      }
    }
  };

  return data[surfaceName] || {
    properties: ['Material surface'],
    type: 'Standard',
    characteristics: {
      conductivity: 'Unknown',
      structure: 'Unknown',
      stability: 'Unknown'
    }
  };
};

// Update the peptideData and surfaceData mapping to use these functions
const peptideData = Peptides.map((peptide, index) => {
  const baseSequence = peptide.split(' (')[0];
  const info = getPeptideInfo(baseSequence);
  
  return {
    id: index + 1,
    name: peptide,
    sequence: baseSequence,
    properties: info.properties,
    description: `A ${info.substrate || 'surface'}-binding peptide${info.selectionMethod ? ` identified through ${info.selectionMethod}` : ''}.`,
    molecularWeight: info.MW || 'Not specified',
    charge: info.charge || 'Not specified',
    pI: info.pI || 'Not specified',
    source: info.source,
    bindingConstants: info.bindingConstants,
    bindingEnergy: info.bindingEnergy,
    structureImage: PEPTIDE_IMAGES[baseSequence] || PEPTIDE_IMAGES.default,
    structureDownloadUrl: PEPTIDE_IMAGES[baseSequence] || PEPTIDE_IMAGES.default
  };
});

const surfaceData = surface.map((name, index) => {
  const info = getSurfaceInfo(name);
  
  return {
    id: index + 1,
    name: name,
    type: info.type,
    properties: info.properties,
    description: `${info.type} surface material used for peptide binding studies.`,
    characteristics: info.characteristics,
    structureImage: SURFACE_IMAGES[name] || SURFACE_IMAGES.default,
    structureDownloadUrl: SURFACE_IMAGES[name] || SURFACE_IMAGES.default
  };
});

function Tools() {
  const [activeTab, setActiveTab] = useState('peptides');
  const [selectedPeptide, setSelectedPeptide] = useState(null);
  const [selectedSurface, setSelectedSurface] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleResultSelect = (result) => {
    if (activeTab === 'peptides') {
      setSelectedPeptide(result);
    } else if (activeTab === 'surfaces') {
      setSelectedSurface(result);
    }
    const element = document.getElementById(`item-${result.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleDeselect = () => {
    if (activeTab === 'peptides') {
      setSelectedPeptide(null);
    } else if (activeTab === 'surfaces') {
      setSelectedSurface(null);
    }
  };

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => console.error('Download failed:', error));
  };

  const isItemSelected = (item) => {
    if (activeTab === 'peptides') {
      return selectedPeptide?.id === item.id;
    }
    return selectedSurface?.id === item.id;
  };

  const generateInteractionData = (peptide, surface) => {
    if (!peptide || !surface) return null;

    const labels = ['Binding Affinity', 'Surface Coverage', 'Stability', 'Hydrophobicity', 'Charge Interaction'];
    const experimentalData = labels.map(() => Math.floor(Math.random() * 100));
    const predictedData = labels.map(() => Math.floor(Math.random() * 100));

    return {
      labels,
      datasets: [
        {
          label: 'Experimental Data',
          data: experimentalData,
          backgroundColor: 'rgba(11, 89, 222, 0.7)',
          borderColor: 'rgba(11, 89, 222, 1)',
          borderWidth: 1,
          borderRadius: 5,
          barPercentage: 0.8,
          categoryPercentage: 0.4
        },
        {
          label: 'Predicted Data',
          data: predictedData,
          backgroundColor: 'rgba(34, 197, 94, 0.7)',
          borderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 1,
          borderRadius: 5,
          barPercentage: 0.8,
          categoryPercentage: 0.4
        }
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          },
          padding: 20
        }
      },
      title: {
        display: true,
        text: `${selectedPeptide?.name || 'Peptide'} - ${selectedSurface?.name || 'Surface'} Interaction Analysis`,
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Interaction Score (%)',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          },
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Interaction Parameters',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    },
  };

  return (
    <PageContainer>
      <Title>Research Tools</Title>
      <Description>
        Explore our comprehensive database of peptides and surfaces. 
        Select components to analyze their interactions.
      </Description>

      <TabContainer>
        <Tab 
          active={activeTab === 'peptides'} 
          onClick={() => setActiveTab('peptides')}
        >
          Peptides
        </Tab>
        <Tab 
          active={activeTab === 'surfaces'} 
          onClick={() => setActiveTab('surfaces')}
        >
          Surfaces
        </Tab>
        <Tab 
          active={activeTab === 'graphs'} 
          onClick={() => setActiveTab('graphs')}
        >
          Graphs
        </Tab>
      </TabContainer>

      {activeTab === 'graphs' ? (
        <>
          <SelectedItemsContainer>
            {selectedPeptide && (
              <SelectedItem>Peptide: {selectedPeptide.name}</SelectedItem>
            )}
            {selectedSurface && (
              <SelectedItem>Surface: {selectedSurface.name}</SelectedItem>
            )}
          </SelectedItemsContainer>
          <GraphContainer>
            {selectedPeptide && selectedSurface ? (
              <Bar 
                data={generateInteractionData(selectedPeptide, selectedSurface)} 
                options={chartOptions}
              />
            ) : (
              <NoSelectionMessage>
                Please select both a peptide and a surface to view their interaction graph.
              </NoSelectionMessage>
            )}
          </GraphContainer>
        </>
      ) : (
        <>
          <SearchBarContainer>
            <SearchBar
              data={activeTab === 'peptides' ? peptideData : surfaceData}
              onResultSelect={handleResultSelect}
              placeholder={`Search ${activeTab}...`}
              primaryKey="name"
              secondaryKey="description"
            />
          </SearchBarContainer>

          <ControlsContainer>
            {((activeTab === 'peptides' && selectedPeptide) || 
              (activeTab === 'surfaces' && selectedSurface)) && (
              <DeselectButton onClick={handleDeselect}>
                <CrossIcon>✕</CrossIcon>
                Deselect {activeTab === 'peptides' ? 'Peptide' : 'Surface'}
              </DeselectButton>
            )}
          </ControlsContainer>

          <SelectionGrid>
            {(activeTab === 'peptides' ? peptideData : surfaceData).map((item) => (
              <SelectionCard
                key={item.id}
                id={`item-${item.id}`}
                selected={isItemSelected(item)}
                onClick={() => handleResultSelect(item)}
              >
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                
                {isItemSelected(item) && (
                  <ImageContainer>
                    <StructureImage 
                      src={item.structureImage} 
                      alt={`${item.name} structure`}
                      onClick={() => handleImageClick(item.structureImage)}
                    />
                    <DownloadButton 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(
                          item.structureDownloadUrl, 
                          `${item.name.toLowerCase().replace(/\s+/g, '-')}-structure.png`
                        );
                      }}
                    >
                      <DownloadIcon />
                      Download Structure
                    </DownloadButton>
                  </ImageContainer>
                )}
                
                {activeTab === 'peptides' ? (
                  <>
                    <CardDescription><strong>Sequence:</strong> {item.sequence}</CardDescription>
                    <CardDescription><strong>MW:</strong> {item.molecularWeight}</CardDescription>
                    <CardDescription><strong>Charge:</strong> {item.charge}</CardDescription>
                  </>
                ) : (
                  <>
                    <CardDescription><strong>Type:</strong> {item.type}</CardDescription>
                    <CardDescription>
                      <strong>Characteristics:</strong>
                      <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                        <li>Roughness: {item.characteristics.roughness}</li>
                        <li>Conductivity: {item.characteristics.conductivity}</li>
                        <li>Stability: {item.characteristics.stability}</li>
                      </ul>
                    </CardDescription>
                  </>
                )}

                <div style={{ marginBottom: '10px' }}>
                  {item.properties.map((prop, index) => (
                    <PropertyTag key={index}>{prop}</PropertyTag>
                  ))}
                </div>
                
                <SelectButton 
                  selected={isItemSelected(item)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResultSelect(item);
                  }}
                >
                  {isItemSelected(item) ? 'Selected' : 'Select'}
                </SelectButton>
              </SelectionCard>
            ))}
          </SelectionGrid>
        </>
      )}

      {modalImage && (
        <ImageModal onClick={() => setModalImage(null)}>
          <ModalImage 
            src={modalImage} 
            alt="Structure large view"
            onClick={(e) => e.stopPropagation()}
          />
        </ImageModal>
      )}
    </PageContainer>
  );
}

export default Tools;