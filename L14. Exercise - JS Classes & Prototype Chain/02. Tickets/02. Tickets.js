function tickets(ticketsArr, sortMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static ticketSorter(method){
            const sortingMethods = {
                destination: (a, b) =>  a.destination.localeCompare(b.destination),
                price: (a, b) =>  a - b,
                status: (a, b) =>  a.status.localeCompare(b.status)
            };
            return sortingMethods[method];
        }

        static parseTicket(string){
            let [destination, price, status] = string.split('|');
            return new Ticket(destination, Number(price), status);
        }
    }

    // ticketsArr = ticketsArr.map(t => Ticket.parseTicket(t)).sort(Ticket.ticketSorter(sortMethod));
    return ticketsArr.map(t => Ticket.parseTicket(t)).sort(Ticket.ticketSorter(sortMethod));
}

// function tests
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
console.log();
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));