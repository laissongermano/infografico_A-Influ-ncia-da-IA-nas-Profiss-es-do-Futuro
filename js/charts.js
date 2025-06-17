document.addEventListener('DOMContentLoaded', () => {

    const brandColors = {
        deepBlue: '#004AAD',
        brightBlue: '#008DDA',
        cyan: '#41C9E2',
        lightCyan: '#ACE2E1',
        darkText: '#1a202c',
    };

    const wrapLabel = (str, maxWidth) => {
        if (str.length <= maxWidth) {
            return str;
        }
        const words = str.split(' ');
        let lines = [];
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            if (currentLine.length + words[i].length + 1 < maxWidth) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        return lines;
    };

    const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
            return label.join(' ');
        } else {
            return label;
        }
    };

    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: brandColors.darkText,
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                },
                titleFont: {
                    size: 14,
                    family: 'Inter'
                },
                bodyFont: {
                    size: 12,
                    family: 'Inter'
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff'
            }
        }
    };

    const adoptionCtx = document.getElementById('adoptionChart').getContext('2d');
    new Chart(adoptionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Implementação Ativa', 'Em Exploração', 'Não Utilizam'],
            datasets: [{
                label: 'Adoção de IA',
                data: [42, 40, 18],
                backgroundColor: [brandColors.deepBlue, brandColors.cyan, '#e2e8f0'],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            ...defaultChartOptions,
            cutout: '70%',
        }
    });

    const skillsCtx = document.getElementById('skillsChart').getContext('2d');
    new Chart(skillsCtx, {
        type: 'bar',
        data: {
            labels: [
                wrapLabel('Pensamento Analítico e Crítico', 25),
                wrapLabel('Pensamento Criativo', 25),
                wrapLabel('Resiliência, Flexibilidade e Agilidade', 25),
                wrapLabel('Liderança e Influência Social', 25),
                wrapLabel('Curiosidade e Aprendizagem Contínua', 25),
                wrapLabel('Alfabetização Tecnológica', 25),
                wrapLabel('Inteligência Artificial e Big Data', 25)
            ],
            datasets: [{
                label: 'Importância Relativa',
                data: [95, 92, 90, 88, 85, 82, 80],
                backgroundColor: [
                    brandColors.deepBlue,
                    brandColors.deepBlue,
                    brandColors.brightBlue,
                    brandColors.brightBlue,
                    brandColors.cyan,
                    brandColors.cyan,
                    brandColors.cyan
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            ...defaultChartOptions,
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: brandColors.darkText,
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        autoSkip: false
                    }
                },
                x: {
                    ticks: {
                        color: brandColors.darkText,
                    }
                }
            },
            plugins: {
                ...defaultChartOptions.plugins,
                legend: {
                    display: false
                }
            }
        }
    });
});