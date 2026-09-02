import json
import re

with open(r'c:\conocimiento\itc-catalogo\content\content.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Helper function to remove number prefix
def remove_prefix(title):
    return re.sub(r'^\d+\.', '', title)

# Updates for Pilar 0: Redes
p0 = data['pilares'][0]
if len(p0['analisis']['estadisticas']) < 4:
    p0['analisis']['estadisticas'].append({"dato": "Impacto de IA en operaciones de red", "valor": "-50% en tiempo de resolución de fallas"})
if len(p0['analisis']['tendencias2026']) < 4:
    p0['analisis']['tendencias2026'].append("Zero Trust Network Access (ZTNA) por defecto")
if len(p0['analisis']['observaciones']) < 4:
    p0['analisis']['observaciones'].append({"tipo": "tip", "texto": "Entender la capa física te dará ventajas al diagnosticar problemas complejos que el software no muestra."})

p0_secciones_new = [
    {
        "titulo": "Fundamentos de Redes",
        "descripcion": "En esta sección explorarás los conceptos básicos de cómo se comunican los sistemas informáticos. Entenderás los modelos de referencia que estandarizan las comunicaciones y permiten que diferentes tecnologías trabajen juntas en armonía.",
        "nivel": "Fundamentos",
        "icono": "globe",
        "temas": [
            {"titulo": "OSI y TCP/IP", "descripcion": "Modelos de comunicación teóricos y prácticos que dividen el proceso de red en capas manejables. Comprenderlos es esencial para diagnosticar cualquier fallo en la red."},
            {"titulo": "Topologías", "descripcion": "Estructura física y lógica de una red, desde estrella hasta malla. Define cómo se interconectan los nodos y afecta la tolerancia a fallos de todo el sistema."},
            {"titulo": "Medios de transmisión", "descripcion": "Tipos de cables como cobre, fibra óptica y tecnologías inalámbricas. Conocer sus capacidades y limitaciones te ayuda a elegir el mejor medio para cada escenario."}
        ],
        "recursosAdicionales": [
            {"nombre": "Cisco NetAcad", "url": "https://www.netacad.com/"},
            {"nombre": "Network Fundamentals (freeCodeCamp)", "url": "https://www.freecodecamp.org/news/computer-networking-course/"},
            {"nombre": "IBM Networking Basics", "url": "https://www.ibm.com/topics/networking"}
        ]
    },
    {
        "titulo": "Hardware de Red",
        "descripcion": "Conoce los equipos físicos esenciales que componen una red moderna. Estos dispositivos son los encargados de dirigir el tráfico, interconectar segmentos y proteger el perímetro de la red.",
        "nivel": "Fundamentos",
        "icono": "router",
        "temas": [
            {"titulo": "Switches", "descripcion": "Dispositivos de capa 2 que conectan equipos dentro de una misma red de área local. Aprenden direcciones MAC para enviar datos solo a donde se necesita."},
            {"titulo": "Routers", "descripcion": "Equipos de capa 3 que interconectan redes distintas y determinan la mejor ruta para enviar paquetes hacia internet u otras sucursales."},
            {"titulo": "Firewalls", "descripcion": "Sistemas de seguridad que monitorean y controlan el tráfico entrante y saliente. Protegen la red interna bloqueando accesos no autorizados."}
        ],
        "recursosAdicionales": [
            {"nombre": "Cloudflare: Qué es un router", "url": "https://www.cloudflare.com/learning/network-layer/what-is-a-router/"},
            {"nombre": "Cisco: Qué es un switch", "url": "https://www.cisco.com/c/es_mx/solutions/small-business/resource-center/networking/what-is-a-network-switch.html"},
            {"nombre": "Palo Alto Networks: Firewalls", "url": "https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall"}
        ]
    },
    {
        "titulo": "Direccionamiento y Subnetting",
        "descripcion": "Aprende cómo se identifican los dispositivos en una red mediante direcciones IP. El subnetting es una habilidad crítica para optimizar el uso de IPs y organizar la red de forma eficiente y segura.",
        "nivel": "Intermedio",
        "icono": "map",
        "temas": [
            {"titulo": "IPv4", "descripcion": "El sistema clásico de direcciones de 32 bits, estructurado en clases y bloques privados. Es la base sobre la cual todavía funciona gran parte de internet."},
            {"titulo": "IPv6", "descripcion": "El estándar del futuro (y presente) con direcciones de 128 bits, diseñado para resolver el agotamiento de direcciones de IPv4 y mejorar el enrutamiento."},
            {"titulo": "Subnetting", "descripcion": "Técnica de división de una red grande en múltiples subredes más pequeñas. Mejora el rendimiento al reducir el dominio de broadcast y aumenta la seguridad."}
        ],
        "recursosAdicionales": [
            {"nombre": "Subnetting Practice", "url": "https://subnettingpractice.com/"},
            {"nombre": "Microsoft Learn: Direccionamiento IP", "url": "https://learn.microsoft.com/es-es/troubleshoot/windows-client/networking/tcp-ip-addressing-and-subnetting"},
            {"nombre": "AWS: VPC IP Addressing", "url": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html"}
        ]
    },
    {
        "titulo": "Protocolos y Servicios",
        "descripcion": "Estudia los servicios y protocolos fundamentales que hacen que la red sea usable y navegable. Son las reglas de comunicación que permiten a las aplicaciones interactuar de forma transparente.",
        "nivel": "Intermedio",
        "icono": "server",
        "temas": [
            {"titulo": "DNS", "descripcion": "Sistema de nombres de dominio que traduce URLs legibles por humanos en direcciones IP. Sin DNS, tendríamos que recordar secuencias numéricas para cada sitio web."},
            {"titulo": "DHCP", "descripcion": "Protocolo para la asignación dinámica de configuraciones de red. Evita el trabajo manual de configurar IP, máscara y puerta de enlace en cada dispositivo."},
            {"titulo": "HTTP/S", "descripcion": "Protocolos base de la transferencia de hipertexto y navegación web. HTTPS añade una capa crítica de encriptación TLS/SSL para proteger la privacidad."}
        ],
        "recursosAdicionales": [
            {"nombre": "Cloudflare: ¿Qué es el DNS?", "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"},
            {"nombre": "MDN: HTTP Overview", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},
            {"nombre": "Cisco: Qué es DHCP", "url": "https://www.cisco.com/c/es_mx/support/docs/ip/dynamic-host-configuration-protocol-dhcp/27470-100.html"}
        ]
    },
    {
        "titulo": "Redes Inalámbricas",
        "descripcion": "Profundiza en las tecnologías Wi-Fi y su evolución. Descubrirás cómo configurar redes sin cables que sean rápidas, confiables y seguras contra intrusiones.",
        "nivel": "Intermedio",
        "icono": "wifi",
        "temas": [
            {"titulo": "Wi-Fi 6", "descripcion": "El estándar 802.11ax que revoluciona la capacidad en entornos densos, ofreciendo mayor velocidad y menor latencia para múltiples dispositivos a la vez."},
            {"titulo": "Seguridad WPA3", "descripcion": "La generación más reciente de protección inalámbrica. Introduce encriptación individualizada y mitigación contra ataques de diccionario fuera de línea."},
            {"titulo": "Controladores", "descripcion": "Sistemas de gestión centralizada para múltiples puntos de acceso. Facilitan actualizaciones, monitoreo de señal y roaming sin cortes para los usuarios."}
        ],
        "recursosAdicionales": [
            {"nombre": "Wi-Fi Alliance", "url": "https://www.wi-fi.org/discover-wi-fi"},
            {"nombre": "Cisco: Wireless Networking", "url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/wireless-local-area-network.html"},
            {"nombre": "Aruba Networks: WPA3", "url": "https://www.arubanetworks.com/faq/what-is-wpa3/"}
        ]
    },
    {
        "titulo": "Seguridad de Red",
        "descripcion": "Aborda los conceptos avanzados para proteger los datos en tránsito y el acceso a recursos. La ciberseguridad es una prioridad máxima en cualquier arquitectura de red moderna.",
        "nivel": "Avanzado",
        "icono": "shield",
        "temas": [
            {"titulo": "VPN", "descripcion": "Túneles encriptados que permiten a usuarios remotos acceder a recursos internos de forma segura a través de internet público."},
            {"titulo": "IDS/IPS", "descripcion": "Sistemas de detección y prevención de intrusos. Analizan el tráfico en tiempo real para identificar y bloquear patrones de ataques conocidos."},
            {"titulo": "Zero Trust", "descripcion": "Modelo de seguridad que asume que ninguna conexión, interna o externa, es confiable por defecto. Requiere verificación continua y mínimos privilegios."}
        ],
        "recursosAdicionales": [
            {"nombre": "Fortinet: Zero Trust", "url": "https://www.fortinet.com/resources/cyberglossary/zero-trust"},
            {"nombre": "Microsoft Learn: Network Security", "url": "https://learn.microsoft.com/en-us/azure/security/fundamentals/network-overview"},
            {"nombre": "Cisco: VPN", "url": "https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html"}
        ]
    },
    {
        "titulo": "Cloud Networking",
        "descripcion": "Descubre cómo se diseñan y conectan las redes en entornos de computación en la nube. Aprende a crear infraestructuras híbridas que integren centros de datos locales con la nube pública.",
        "nivel": "Avanzado",
        "icono": "cloud",
        "temas": [
            {"titulo": "VPC", "descripcion": "Redes virtuales privadas que proporcionan aislamiento lógico en la nube. Permiten controlar subredes, tablas de enrutamiento y accesos a internet."},
            {"titulo": "Direct Connect", "descripcion": "Enlaces de red dedicados que conectan la infraestructura local directamente con el proveedor de la nube. Garantizan baja latencia y mayor seguridad."},
            {"titulo": "Load Balancers", "descripcion": "Servicios que distribuyen el tráfico entrante de aplicaciones a través de múltiples objetivos. Aseguran alta disponibilidad y escalabilidad elástica."}
        ],
        "recursosAdicionales": [
            {"nombre": "AWS VPC Documentation", "url": "https://docs.aws.amazon.com/vpc/"},
            {"nombre": "Azure Virtual Network", "url": "https://learn.microsoft.com/en-us/azure/virtual-network/"},
            {"nombre": "Google Cloud VPC", "url": "https://cloud.google.com/vpc/docs/overview"}
        ]
    },
    {
        "titulo": "Automatización+IA en Redes",
        "descripcion": "El futuro de las operaciones de TI reside en la automatización y la inteligencia artificial. Esta sección te enseña cómo reemplazar tareas manuales por código y algoritmos inteligentes.",
        "nivel": "Especialización",
        "icono": "cpu",
        "temas": [
            {"titulo": "Ansible/Python", "descripcion": "Herramientas de scripting y automatización que permiten configurar cientos de dispositivos de red en minutos, minimizando los errores humanos típicos de la CLI."},
            {"titulo": "SDN", "descripcion": "Redes definidas por software que separan el plano de control del plano de datos. Proporcionan agilidad, programación centralizada y adaptación dinámica a las demandas."},
            {"titulo": "AIOps", "descripcion": "Plataformas de IA para operaciones de TI que ingieren telemetría masiva y utilizan machine learning para predecir fallos y automatizar la resolución de incidencias."}
        ],
        "recursosAdicionales": [
            {"nombre": "Ansible para Redes", "url": "https://www.ansible.com/use-cases/network-automation"},
            {"nombre": "Cisco DevNet", "url": "https://developer.cisco.com/networking/"},
            {"nombre": "IBM AIOps", "url": "https://www.ibm.com/aiops"}
        ]
    }
]
p0['secciones'] = p0_secciones_new

# Fix IA
p0['iaAplicada']['herramientas'][0]['url'] = 'https://www.cisco.com/site/us/en/solutions/ai-networking/index.html'
p0['iaAplicada']['herramientas'][1]['url'] = 'https://www.ibm.com/aiops'
p0['iaAplicada']['herramientas'][2]['url'] = 'https://www.juniper.net/us/en/products/mist-ai.html'
p0['iaAplicada']['cursos'][0]['url'] = 'https://www.coursera.org/learn/machine-learning-in-networking'

# Pilar 1: Servidores
p1 = data['pilares'][1]
if len(p1['analisis']['estadisticas']) < 4:
    p1['analisis']['estadisticas'].append({"dato": "Adopción de Kubernetes", "valor": "Proyectado >85% en empresas grandes"})
if len(p1['analisis']['tendencias2026']) < 4:
    p1['analisis']['tendencias2026'].append("Computación confidencial para datos en memoria")
if len(p1['analisis']['observaciones']) < 4:
    p1['analisis']['observaciones'].append({"tipo": "tip", "texto": "Aprender scripting avanzado (Bash/PowerShell) te ahorrará innumerables horas de trabajo manual."})

p1_secciones_new = [
    {
        "titulo": "Fundamentos de Servidores",
        "descripcion": "Conoce los componentes físicos que diferencian un servidor empresarial de una computadora personal. Aprenderás sobre hardware diseñado para funcionar ininterrumpidamente durante años.",
        "nivel": "Fundamentos",
        "icono": "server",
        "temas": [
            {"titulo": "Servidores físicos", "descripcion": "Equipos robustos con procesadores multinúcleo potentes y memorias con corrección de errores (ECC). Son la base de los centros de datos modernos."},
            {"titulo": "Rack", "descripcion": "Sistemas estandarizados de montaje que optimizan el espacio físico, el enfriamiento y el cableado en los data centers."},
            {"titulo": "Energía", "descripcion": "Soluciones críticas de suministro de energía ininterrumpida (UPS) y fuentes redundantes. Previenen la caída de servicios ante cortes eléctricos."}
        ],
        "recursosAdicionales": [
            {"nombre": "Dell: Guía de Servidores", "url": "https://www.dell.com/en-us/shop/servers-storage-and-networking/sc/servers"},
            {"nombre": "HPE ProLiant Servers", "url": "https://www.hpe.com/us/en/servers/proliant.html"},
            {"nombre": "TechTarget: Data Center Hardware", "url": "https://www.techtarget.com/searchdatacenter/definition/server"}
        ]
    },
    {
        "titulo": "Sistemas Operativos de Servidor",
        "descripcion": "Explora los sistemas operativos optimizados para empresas. Estos SO priorizan la estabilidad, la seguridad y el rendimiento multihilo por encima de la interfaz gráfica de usuario.",
        "nivel": "Fundamentos",
        "icono": "monitor",
        "temas": [
            {"titulo": "Linux", "descripcion": "Distribuciones empresariales como Ubuntu Server y Red Hat. Dominan el mercado de servidores web y entornos en la nube gracias a su eficiencia y seguridad."},
            {"titulo": "Windows Server", "descripcion": "Sistema operativo de Microsoft ideal para redes corporativas internas. Fundamental por su integración con Active Directory, IIS y políticas de grupo."},
            {"titulo": "Unix", "descripcion": "Sistemas altamente estables heredados, como AIX o Solaris, que todavía sostienen infraestructuras bancarias y gubernamentales de misión crítica."}
        ],
        "recursosAdicionales": [
            {"nombre": "Ubuntu Server Docs", "url": "https://ubuntu.com/server/docs"},
            {"nombre": "Microsoft Learn: Windows Server", "url": "https://learn.microsoft.com/en-us/windows-server/"},
            {"nombre": "Red Hat Enterprise Linux", "url": "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"}
        ]
    },
    {
        "titulo": "Virtualización Clásica",
        "descripcion": "Aprende cómo la virtualización transformó la TI al permitir que múltiples máquinas virtuales se ejecuten en un solo servidor físico. Maximiza los recursos de hardware y reduce costos operativos.",
        "nivel": "Intermedio",
        "icono": "copy",
        "temas": [
            {"titulo": "Hipervisores", "descripcion": "El software base, como VMware ESXi o Hyper-V, que abstrae y asigna recursos físicos a las máquinas virtuales de forma segura y eficiente."},
            {"titulo": "VMs", "descripcion": "Máquinas virtuales que emulan el hardware de un servidor completo. Tienen su propio sistema operativo y están aisladas entre sí."},
            {"titulo": "Storage", "descripcion": "Almacenamiento de red tipo SAN y NAS. Centraliza discos de forma externa permitiendo que las VMs se muevan entre hosts sin interrupción."}
        ],
        "recursosAdicionales": [
            {"nombre": "VMware: ¿Qué es la virtualización?", "url": "https://www.vmware.com/solutions/virtualization.html"},
            {"nombre": "Microsoft Learn: Hyper-V", "url": "https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/"},
            {"nombre": "Proxmox Virtual Environment", "url": "https://pve.proxmox.com/wiki/Main_Page"}
        ]
    },
    {
        "titulo": "Contenedores Docker",
        "descripcion": "Adéntrate en el mundo de la virtualización a nivel de sistema operativo. Los contenedores ofrecen empaquetado de aplicaciones ligero, portátil y con tiempos de inicio inmediatos.",
        "nivel": "Intermedio",
        "icono": "box",
        "temas": [
            {"titulo": "Imágenes", "descripcion": "Plantillas inmutables que contienen el código, las librerías y las dependencias necesarias. Se construyen mediante Dockerfiles de forma determinista."},
            {"titulo": "Contenedores", "descripcion": "Instancias en ejecución de imágenes Docker. Aíslan la aplicación del entorno del host garantizando que funcione de forma consistente en cualquier lugar."},
            {"titulo": "Docker Compose", "descripcion": "Herramienta que facilita la orquestación básica definiendo y ejecutando aplicaciones multicontenedor complejas desde un único archivo YAML."}
        ],
        "recursosAdicionales": [
            {"nombre": "Docker Official Documentation", "url": "https://docs.docker.com/"},
            {"nombre": "Docker Tutorial for Beginners", "url": "https://www.freecodecamp.org/news/docker-crash-course/"},
            {"nombre": "Red Hat: Contenedores", "url": "https://www.redhat.com/es/topics/containers"}
        ]
    },
    {
        "titulo": "Orquestación Kubernetes",
        "descripcion": "Descubre cómo gestionar miles de contenedores de forma automatizada y resiliente a escala empresarial. Kubernetes se ha convertido en el estándar de la industria para despliegues masivos.",
        "nivel": "Avanzado",
        "icono": "layers",
        "temas": [
            {"titulo": "Pods", "descripcion": "La unidad atómica de despliegue en Kubernetes. Encapsula uno o más contenedores estrechamente acoplados que comparten red y almacenamiento."},
            {"titulo": "Servicios", "descripcion": "Abstracción que proporciona una dirección IP estable para un conjunto de Pods dinámicos. Facilita el descubrimiento de servicios y balanceo de carga interno."},
            {"titulo": "Deployments", "descripcion": "Controladores que garantizan que el número deseado de réplicas de una aplicación esté en ejecución. Permiten realizar actualizaciones sin tiempo de inactividad (rolling updates)."}
        ],
        "recursosAdicionales": [
            {"nombre": "Kubernetes Official Docs", "url": "https://kubernetes.io/docs/home/"},
            {"nombre": "CNCF: What is Kubernetes", "url": "https://www.cncf.io/what-is-kubernetes/"},
            {"nombre": "Google Cloud: Kubernetes", "url": "https://cloud.google.com/learn/what-is-kubernetes"}
        ]
    },
    {
        "titulo": "Almacenamiento y Backup",
        "descripcion": "La persistencia y protección de los datos son la máxima responsabilidad en infraestructura. Explora las estrategias y arquitecturas para asegurar que la información nunca se pierda.",
        "nivel": "Intermedio",
        "icono": "database",
        "temas": [
            {"titulo": "RAID", "descripcion": "Arreglos redundantes de discos independientes. Protegen contra fallos de disco físico mediante espejeo o cálculo de paridad de datos."},
            {"titulo": "SAN", "descripcion": "Red de área de almacenamiento dedicada que entrega almacenamiento por bloques altamente eficiente y escalable para servidores de bases de datos y virtualización."},
            {"titulo": "Backup", "descripcion": "Implementación de estrategias como la regla 3-2-1 (3 copias, 2 medios, 1 externa). Esencial para la recuperación ante desastres o ataques de ransomware."}
        ],
        "recursosAdicionales": [
            {"nombre": "Veeam: Regla de backup 3-2-1", "url": "https://www.veeam.com/blog/how-to-follow-the-3-2-1-backup-rule-with-veeam-backup-replication.html"},
            {"nombre": "AWS Storage Services", "url": "https://aws.amazon.com/products/storage/"},
            {"nombre": "NetApp: SAN vs NAS", "url": "https://www.netapp.com/data-storage/san-vs-nas/"}
        ]
    },
    {
        "titulo": "Monitoreo y HA",
        "descripcion": "Implementa prácticas de alta disponibilidad y observabilidad continua. Monitorear los sistemas te permite detectar degradación de servicios antes de que se convierta en una caída total.",
        "nivel": "Avanzado",
        "icono": "activity",
        "temas": [
            {"titulo": "Prometheus", "descripcion": "Base de datos de series temporales de código abierto enfocada en recopilar métricas detalladas y generar alertas en entornos dinámicos de contenedores."},
            {"titulo": "Grafana", "descripcion": "Plataforma de visualización que crea dashboards interactivos a partir de las métricas de Prometheus. Facilita la comprensión del estado del sistema de un vistazo."},
            {"titulo": "Clustering", "descripcion": "Agrupación de servidores para redundancia mutua. Si un nodo del clúster falla, los demás asumen la carga automáticamente, evitando interrupciones al usuario."}
        ],
        "recursosAdicionales": [
            {"nombre": "Prometheus Docs", "url": "https://prometheus.io/docs/introduction/overview/"},
            {"nombre": "Grafana Tutorials", "url": "https://grafana.com/tutorials/"},
            {"nombre": "Datadog: Observability", "url": "https://www.datadoghq.com/blog/observability-vs-monitoring/"}
        ]
    },
    {
        "titulo": "IaC+IA",
        "descripcion": "Evoluciona la gestión de infraestructura de clics manuales a código declarativo (IaC), ahora potenciado por inteligencia artificial para una adopción más rápida y segura.",
        "nivel": "Especialización",
        "icono": "code",
        "temas": [
            {"titulo": "Terraform", "descripcion": "Herramienta open-source para aprovisionar y gestionar recursos en cualquier nube mediante archivos de configuración legibles y versionables."},
            {"titulo": "Ansible", "descripcion": "Sistema de gestión de configuración que asegura que los servidores mantengan el estado deseado. Evita el temido 'desvío de configuración' a lo largo del tiempo."},
            {"titulo": "IA Assistants", "descripcion": "Integración de copilotos basados en IA que sugieren fragmentos de código, detectan problemas de seguridad o proponen refactorizaciones durante el desarrollo de IaC."}
        ],
        "recursosAdicionales": [
            {"nombre": "Terraform by HashiCorp", "url": "https://developer.hashicorp.com/terraform"},
            {"nombre": "Ansible Documentation", "url": "https://docs.ansible.com/"},
            {"nombre": "Pulumi IaC", "url": "https://www.pulumi.com/"}
        ]
    }
]
p1['secciones'] = p1_secciones_new

# Fix IA
p1['iaAplicada']['herramientas'][0]['url'] = 'https://github.com/features/copilot'
p1['iaAplicada']['herramientas'][1]['url'] = 'https://www.redhat.com/en/technologies/management/ansible/ansible-lightspeed'
p1['iaAplicada']['herramientas'][2]['url'] = 'https://aws.amazon.com/codewhisperer/'
p1['iaAplicada']['cursos'][0]['url'] = 'https://www.udacity.com/course/ai-for-devops--nd020'

# Pilar 2: Programación
p2 = data['pilares'][2]
if len(p2['analisis']['estadisticas']) < 4:
    p2['analisis']['estadisticas'].append({"dato": "Adopción de IA generativa en código", "valor": "92% de los programadores la usan"})
if len(p2['analisis']['tendencias2026']) < 4:
    p2['analisis']['tendencias2026'].append("Rust para backends de alto rendimiento")
if len(p2['analisis']['observaciones']) < 4:
    p2['analisis']['observaciones'].append({"tipo": "tip", "texto": "Un buen conocimiento de bases de datos relacionales sigue siendo tu activo más duradero frente a frameworks efímeros."})

p2_secciones_new = [
    {
        "titulo": "Fundamentos de Programación",
        "descripcion": "Aprende la lógica universal detrás de todo el software. Estos conceptos algorítmicos son aplicables independientemente del lenguaje de programación que elijas dominar en el futuro.",
        "nivel": "Fundamentos",
        "icono": "code",
        "temas": [
            {"titulo": "Variables", "descripcion": "Contenedores en memoria para almacenar tipos de datos. Comprender sus alcances y mutabilidad es el primer paso para dominar la programación."},
            {"titulo": "Bucles", "descripcion": "Estructuras de control que permiten iterar sobre colecciones de datos o ejecutar bloques de código repetidamente bajo condiciones específicas."},
            {"titulo": "Funciones", "descripcion": "Bloques de código reutilizables y modulares. Fomentan el principio DRY (Don't Repeat Yourself) y facilitan la lectura y el mantenimiento de grandes bases de código."}
        ],
        "recursosAdicionales": [
            {"nombre": "freeCodeCamp: Learn to Code", "url": "https://www.freecodecamp.org/"},
            {"nombre": "MDN: JavaScript Basics", "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"},
            {"nombre": "CS50 de Harvard", "url": "https://cs50.harvard.edu/x/"}
        ]
    },
    {
        "titulo": "Frontend Web",
        "descripcion": "Construye la interfaz de usuario con la que interactúan directamente las personas. El frontend es donde la tecnología, el diseño y la experiencia de usuario (UX) se encuentran.",
        "nivel": "Fundamentos",
        "icono": "layout",
        "temas": [
            {"titulo": "HTML", "descripcion": "El lenguaje de marcado estándar que provee la estructura y el significado semántico a las páginas web. Esencial para la accesibilidad y el SEO."},
            {"titulo": "CSS", "descripcion": "Hojas de estilo que definen la presentación visual y el diseño adaptable (responsive design) en múltiples pantallas, desde móviles hasta monitores 4K."},
            {"titulo": "JS", "descripcion": "JavaScript otorga interactividad y manipulación dinámica del DOM. Es el lenguaje rey del navegador que da vida a las páginas estáticas."}
        ],
        "recursosAdicionales": [
            {"nombre": "MDN Web Docs", "url": "https://developer.mozilla.org/en-US/docs/Web"},
            {"nombre": "CSS-Tricks", "url": "https://css-tricks.com/"},
            {"nombre": "JavaScript.info", "url": "https://javascript.info/"}
        ]
    },
    {
        "titulo": "Frameworks Frontend",
        "descripcion": "Explora las herramientas modernas que aceleran y organizan el desarrollo de aplicaciones web complejas (SPAs), haciendo que el código sea más escalable y robusto.",
        "nivel": "Intermedio",
        "icono": "react",
        "temas": [
            {"titulo": "React", "descripcion": "Librería de Facebook para construir interfaces de usuario declarativas mediante componentes encapsulados que manejan su propio estado."},
            {"titulo": "Vue", "descripcion": "Un framework progresivo conocido por su curva de aprendizaje suave, excelente reactividad y un diseño de componentes muy intuitivo."},
            {"titulo": "Angular", "descripcion": "Plataforma completa de Google con TypeScript por defecto. Impone convenciones estrictas que benefician el desarrollo de aplicaciones empresariales masivas."}
        ],
        "recursosAdicionales": [
            {"nombre": "React Official Docs", "url": "https://react.dev/"},
            {"nombre": "Vue.js Guide", "url": "https://vuejs.org/guide/introduction.html"},
            {"nombre": "Angular Documentation", "url": "https://angular.dev/"}
        ]
    },
    {
        "titulo": "Backend Development",
        "descripcion": "Implementa la lógica de negocio y el procesamiento de datos del lado del servidor. El backend garantiza que los datos se manejen de manera segura, eficiente y coherente.",
        "nivel": "Intermedio",
        "icono": "server",
        "temas": [
            {"titulo": "Node.js", "descripcion": "Entorno de ejecución asíncrono que permite usar JavaScript en el servidor. Excelente para aplicaciones en tiempo real con alta concurrencia."},
            {"titulo": "Python", "descripcion": "Lenguaje versátil con frameworks potentes como Django y FastAPI. Destaca por su sintaxis clara y su integración masiva con bibliotecas de IA."},
            {"titulo": "Java", "descripcion": "Lenguaje orientado a objetos extremadamente maduro. El ecosistema Spring Boot es el líder indiscutible en la arquitectura de microservicios corporativos."}
        ],
        "recursosAdicionales": [
            {"nombre": "Node.js Documentation", "url": "https://nodejs.org/en/docs/"},
            {"nombre": "FastAPI Docs", "url": "https://fastapi.tiangolo.com/"},
            {"nombre": "Spring Boot", "url": "https://spring.io/projects/spring-boot"}
        ]
    },
    {
        "titulo": "Bases de Datos",
        "descripcion": "Domina el almacenamiento persistente de información crítica. Una correcta elección y diseño de base de datos determina el rendimiento general y la escalabilidad del sistema.",
        "nivel": "Intermedio",
        "icono": "database",
        "temas": [
            {"titulo": "SQL", "descripcion": "Sistemas de bases de datos relacionales (como PostgreSQL o MySQL). Garantizan integridad referencial y soportan consultas altamente estructuradas y complejas."},
            {"titulo": "NoSQL", "descripcion": "Bases de datos distribuidas y sin esquema fijo (como MongoDB). Proporcionan flexibilidad extrema y escalabilidad horizontal nativa para grandes volúmenes de datos no estructurados."},
            {"titulo": "ORMs", "descripcion": "Herramientas de mapeo objeto-relacional que abstraen el lenguaje de consulta SQL. Permiten interactuar con bases de datos directamente usando clases y objetos del lenguaje de programación."}
        ],
        "recursosAdicionales": [
            {"nombre": "PostgreSQL Tutorial", "url": "https://www.postgresqltutorial.com/"},
            {"nombre": "MongoDB University", "url": "https://learn.mongodb.com/"},
            {"nombre": "Prisma ORM", "url": "https://www.prisma.io/"}
        ]
    },
    {
        "titulo": "APIs y Microservicios",
        "descripcion": "Diseña interfaces y arquitecturas que permiten a sistemas dispersos comunicarse e intercambiar datos de forma estandarizada y segura a través de la red.",
        "nivel": "Avanzado",
        "icono": "link",
        "temas": [
            {"titulo": "REST", "descripcion": "Estilo arquitectónico estándar de facto en la web que utiliza verbos HTTP (GET, POST, PUT, DELETE) sobre recursos identificados por URIs de forma apátrida."},
            {"titulo": "GraphQL", "descripcion": "Lenguaje de consulta de APIs creado por Facebook. Permite a los clientes solicitar exactamente los datos específicos que necesitan, evitando el sobre-aprovisionamiento de información."},
            {"titulo": "gRPC", "descripcion": "Framework RPC moderno de alto rendimiento que usa HTTP/2 y Protocol Buffers. Es ideal para comunicación interna ultrarrápida entre microservicios de backend."}
        ],
        "recursosAdicionales": [
            {"nombre": "REST API Tutorial", "url": "https://restfulapi.net/"},
            {"nombre": "GraphQL Official", "url": "https://graphql.org/"},
            {"nombre": "gRPC IO", "url": "https://grpc.io/docs/"}
        ]
    },
    {
        "titulo": "Testing y CI/CD",
        "descripcion": "Asegura la calidad del software a través de pruebas automatizadas y canales de despliegue continuo. Estas prácticas previenen regresiones y aceleran el ritmo de entregas a producción.",
        "nivel": "Avanzado",
        "icono": "check-circle",
        "temas": [
            {"titulo": "Unit Testing", "descripcion": "Pruebas de grano fino centradas en verificar funciones o componentes individuales de forma aislada. Son la base más sólida de la pirámide de testing."},
            {"titulo": "E2E", "descripcion": "Pruebas de extremo a extremo que simulan escenarios de usuarios reales, desde el frontend hasta la base de datos, garantizando que el sistema entero funcione en conjunto."},
            {"titulo": "Pipelines", "descripcion": "Cadenas de automatización en repositorios (como GitHub Actions). Ejecutan análisis de código, tests y despliegues sin intervención manual ante cada nuevo commit."}
        ],
        "recursosAdicionales": [
            {"nombre": "Jest Testing Framework", "url": "https://jestjs.io/"},
            {"nombre": "Cypress E2E Testing", "url": "https://www.cypress.io/"},
            {"nombre": "GitHub Actions Docs", "url": "https://docs.github.com/en/actions"}
        ]
    },
    {
        "titulo": "IA para Desarrolladores",
        "descripcion": "Integra herramientas de inteligencia artificial generativa en tu flujo de trabajo diario para maximizar tu productividad, aprender patrones nuevos y acelerar la resolución de errores.",
        "nivel": "Especialización",
        "icono": "cpu",
        "temas": [
            {"titulo": "Copilot", "descripcion": "Asistentes de programación integrados en el IDE. Proponen autocompletados extensos de código y generan bloques funcionales enteros a partir de comentarios y contexto."},
            {"titulo": "Code Review AI", "descripcion": "Herramientas que analizan el código en busca de vulnerabilidades de seguridad, malos olores (code smells) y ofrecen sugerencias de refactorización inteligentes."},
            {"titulo": "Prompting", "descripcion": "Técnicas avanzadas para estructurar peticiones (prompts) a modelos de lenguaje (LLMs), logrando que generen o expliquen algoritmos complejos con precisión y contexto."}
        ],
        "recursosAdicionales": [
            {"nombre": "GitHub Copilot Docs", "url": "https://docs.github.com/en/copilot"},
            {"nombre": "Prompt Engineering Guide", "url": "https://www.promptingguide.ai/"},
            {"nombre": "Cursor IDE", "url": "https://cursor.sh/"}
        ]
    }
]
p2['secciones'] = p2_secciones_new

# Fix IA
p2['iaAplicada']['herramientas'][0]['url'] = 'https://github.com/features/copilot'
p2['iaAplicada']['herramientas'][1]['url'] = 'https://cursor.sh/'
p2['iaAplicada']['herramientas'][2]['url'] = 'https://chatgpt.com/'
p2['iaAplicada']['herramientas'][3]['url'] = 'https://codeium.com/'
p2['iaAplicada']['cursos'][0]['url'] = 'https://www.coursera.org/learn/ai-for-developers'

with open(r'c:\conocimiento\itc-catalogo\content\content.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
